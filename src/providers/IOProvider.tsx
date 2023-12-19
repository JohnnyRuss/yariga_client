/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector, useAppDispatch } from "store/hooks";
import { useLocation } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import { io_keys } from "config/config";
import { API_ORIGIN } from "config/env";
import { io as io_client, Socket } from "socket.io-client";

import { chatActions } from "store/reducers/chat.reducer";

import { useCheckIsAuthenticatedUser } from "hooks/auth";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { NewMessageT } from "interface/config/socket.io.types";
import { MarkConversationAsReadResponseT } from "interface/db/chat.types";

type IOProviderT = { children: React.ReactNode };

type IOContextT = {
  socket: Socket | null;
  io_keys: typeof io_keys;
};

const IOContext = createContext<IOContextT>({
  socket: null,
  io_keys: io_keys,
});

const IOProvider: React.FC<IOProviderT> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const [socket, setSocket] = useState<Socket | null>(null);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);

  const authenticatedUser = useAppSelector(selectAuthenticatedUser);

  async function establishConnection() {
    const socketIO = io_client(API_ORIGIN as string, {
      transports: ["websocket"],
    });

    setSocket(socketIO);

    return socketIO;
  }

  const { check, user } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    async function checkAuth() {
      const { isAuthenticatedUser: isAuthenticated } = await check();
      setIsAuthenticatedUser(isAuthenticated);
    }

    checkAuth();
  }, [authenticatedUser]);

  useEffect(() => {
    (async function userConnection() {
      const s = await establishConnection();

      if (isAuthenticatedUser) {
        s.emit(io_keys.user_connection, {
          avatar: user.avatar,
          userId: user._id,
          email: user.email,
          username: user.username,
        });
      }
    })();

    return () => {
      socket?.close();
    };
  }, [isAuthenticatedUser]);

  useEffect(() => {
    if (!socket) return;

    const reg = /^\/messages(?:\/\w+)?$/;

    socket.on(io_keys.new_message, (data: NewMessageT) => {
      dispatch(chatActions.setUnreadConversationsCount(data.conversation._id));

      if (!reg.test(pathname)) return;

      dispatch(
        chatActions.setSentMessage({
          message: data.message,
          conversation: {
            _id: data.conversation._id,
            isReadBy: data.conversation.isReadBy,
            updatedAt: data.conversation.updatedAt,
            lastMessage: data.conversation.lastMessage,
          },
        })
      );

      dispatch(
        chatActions.setNewConversationCard({
          activeUserId: authenticatedUser._id,
          conversation: {
            _id: data.conversation._id,
            isReadBy: data.conversation.isReadBy,
            updatedAt: data.conversation.updatedAt,
            createdAt: data.conversation.createdAt,
            lastMessage: data.conversation.lastMessage,
            participants: data.conversation.participants,
          },
        })
      );
    });

    socket.on(io_keys.read_message, (data: MarkConversationAsReadResponseT) => {
      dispatch(chatActions.setMarkConversationAsRead(data));
    });

    return () => {
      // socket.off(io_keys,)
    };
  }, [socket, pathname]);

  return (
    <IOContext.Provider value={{ socket, io_keys }}>
      {children}
    </IOContext.Provider>
  );
};

export default IOProvider;

export const useIO = () => useContext(IOContext);

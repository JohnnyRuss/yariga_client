import { Middleware } from "@reduxjs/toolkit";
import { DispatchT, RootStateT } from "store/store";

import { API_ORIGIN } from "config/env";
import { io_keys } from "config/config";
import { io as io_client } from "socket.io-client";

import { chatActions } from "store/reducers/chat.reducer";

const socketIO = io_client(API_ORIGIN as string, {
  transports: ["websocket"],
});

const socketMiddleware: Middleware<{}, RootStateT, DispatchT> =
  (store) => (next) => (action) => {
    if (action.type === "USER_CONNECTION") {
      socketIO.on(io_keys.user_connection, (data: { userId: string }) => {
        store.dispatch(chatActions.setOnlineUsers(data));
      });
    }

    if (action.type === "USER_DISCONNECTION") {
      socketIO.on(io_keys.user_disconnection, (data: { userId: string }) => {
        store.dispatch(chatActions.setOfflineUsers(data));
      });
    }

    return next(action);
  };

export default socketMiddleware;

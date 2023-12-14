/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from "store/hooks";
import { useParams, useLocation } from "react-router-dom";
import { createContext, useContext, useCallback } from "react";

import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import {
  MessageT,
  ConversationShortT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { ChatContextT, ChartProviderT } from "./index.types";

const PARTICIPANT_DEFAULT: ConversationParticipantT = {
  _id: "",
  avatar: "",
  email: "",
  username: "",
  role: "USER",
};

const ChatContext = createContext<ChatContextT>({
  conversationId: "",
  showControl: false,
  authenticatedUserId: "",
  checkConversationIsRead: () => ({
    isRead: false,
    belongsToActiveUser: false,
  }),
  getLastMessageAdressat: () => PARTICIPANT_DEFAULT,
  groupMessages: () => [],
});

const ChatProvider: React.FC<ChartProviderT> = ({ children }) => {
  const { search } = useLocation();
  const { conversationId } = useParams();

  const showControl =
    new URLSearchParams(search).get("conversation-panel") === "1";

  const { _id: authenticatedUserId } = useAppSelector(selectAuthenticatedUser);

  const getLastMessageAdressat = (
    participants: Array<ConversationParticipantT>,
    lastMessageSenderId: string
  ) =>
    participants.find((user) => user._id !== lastMessageSenderId) ||
    PARTICIPANT_DEFAULT;

  const checkConversationIsRead = (conversation: ConversationShortT) => {
    const lastMessageSenderId = conversation.lastMessage?.sender?._id || "";

    const adressat = getLastMessageAdressat(
      conversation.participants,
      lastMessageSenderId
    );

    const isRead = conversation.isReadBy.includes(adressat._id);

    const belongsToActiveUser = lastMessageSenderId === authenticatedUserId;

    return { isRead, belongsToActiveUser };
  };

  const groupMessages = useCallback((data: Array<MessageT>) => {
    const groups: Array<Array<MessageT>> = [];

    let temp: Array<MessageT> = [];

    data.forEach((message, index, row) => {
      const senderId = message.sender?._id;
      const previousSenderId = index > 0 ? row[index - 1].sender?._id : "";

      const isInRow = senderId === previousSenderId;

      const lastIndex = row.length - 1;

      switch (index) {
        case 0:
          temp.push(message);

          if (!row[index + 1]) {
            groups.push(temp);
            temp = [];
          }

          break;
        case lastIndex:
          if (isInRow) {
            temp.push(message);
            groups.push(temp);
            temp = [];
          } else {
            groups.push(temp);
            groups.push([message]);
            temp = [];
          }
          break;
        default:
          if (isInRow) temp.push(message);
          else {
            groups.push(temp);
            temp = [message];
          }
          break;
      }
    });

    return groups;
  }, []);

  return (
    <ChatContext.Provider
      value={{
        showControl,
        getLastMessageAdressat,
        groupMessages,
        authenticatedUserId,
        checkConversationIsRead,
        conversationId: conversationId || "",
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
export const useChatContext = () => useContext(ChatContext);

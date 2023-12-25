/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from "store/hooks";
import { useParams, useLocation } from "react-router-dom";
import { createContext, useContext } from "react";

import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { ChatContextT, ChartProviderT } from "./index.types";
import { ConversationParticipantT } from "interface/db/chat.types";

const PARTICIPANT_DEFAULT: ConversationParticipantT = {
  _id: "",
  avatar: "",
  email: "",
  username: "",
  role: "USER",
  isOnline: false,
};

const ChatContext = createContext<ChatContextT>({
  conversationId: "",
  showControl: false,
  authenticatedUserId: "",
  getLastMessageAdressat: () => PARTICIPANT_DEFAULT,
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

  return (
    <ChatContext.Provider
      value={{
        showControl,
        authenticatedUserId,
        getLastMessageAdressat,
        conversationId: conversationId || "",
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
export const useChatContext = () => useContext(ChatContext);

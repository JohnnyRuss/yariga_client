/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { useAppSelector } from "store/hooks";
import { useParams, useLocation } from "react-router-dom";

import { useConversationQuery } from "hooks/api/chat";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import {
  MessageT,
  ConversationShortT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { EmojiT } from "interface/components/common.types";

type ChartProviderT = {
  children: React.ReactNode;
};

type ChatContextT = {
  conversationId: string;
  showControl: boolean;
  authenticatedUserId: string;
  checkConversationIsRead: (conversation: ConversationShortT) => {
    isRead: boolean;
    belongsToActiveUser: boolean;
  };
  getAdressat: (
    participants: Array<ConversationParticipantT>
  ) => ConversationParticipantT;
  groupMessages: (data: Array<MessageT>) => Array<Array<MessageT>>;
  text: string;
  onSendMessage: (e?: React.FormEvent) => void;
  onEnter: (e: React.KeyboardEvent) => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onEmojiSelection: (value: EmojiT) => void;
};

const PARTICIPANT_DEFAULT = { _id: "", avatar: "", email: "", username: "" };

const ChatContext = createContext<ChatContextT>({
  conversationId: "",
  showControl: false,
  authenticatedUserId: "",
  checkConversationIsRead: () => ({
    isRead: false,
    belongsToActiveUser: false,
  }),
  getAdressat: () => PARTICIPANT_DEFAULT,
  groupMessages: () => [],
  text: "",
  onSendMessage: () => {},
  onEnter: () => {},
  onTextChange: () => {},
  handleBlur: () => {},
  onEmojiSelection: () => {},
});

const ChatProvider: React.FC<ChartProviderT> = ({ children }) => {
  const { search } = useLocation();
  const { conversationId } = useParams();

  const showControl =
    new URLSearchParams(search).get("active-tab") === "control";

  const { _id: authenticatedUserId } = useAppSelector(selectAuthenticatedUser);

  const getAdressat = (participants: Array<ConversationParticipantT>) =>
    participants.find((user) => user._id !== authenticatedUserId) ||
    PARTICIPANT_DEFAULT;

  const checkConversationIsRead = (conversation: ConversationShortT) => {
    const lastMessageSenderId = conversation.lastMessage?.sender._id || "";
    const adressat = getAdressat(conversation.participants);

    const isRead =
      lastMessageSenderId !== authenticatedUserId &&
      conversation.isReadBy.includes(adressat._id);

    const belongsToActiveUser = lastMessageSenderId === authenticatedUserId;

    return { isRead, belongsToActiveUser };
  };

  const groupMessages = (data: Array<MessageT>) => {
    const groups: Array<Array<MessageT>> = [];

    let temp: Array<MessageT> = [];

    data.forEach((message, index, row) => {
      const senderId = message.sender._id;
      const previousSenderId = index > 0 ? row[index - 1].sender._id : "";

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
  };

  // WRITE MESSAGE

  // 0.0 DECLARE STATES
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  const { sendMessage } = useConversationQuery();

  // 1.0 Handle Text Change
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  // 1.1 Concat Icons With Text
  const getCursorPosition = (element: HTMLTextAreaElement): number =>
    element.selectionStart !== undefined ? element.selectionStart : 0;

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) =>
    setCursorPosition(getCursorPosition(event.target));

  const onEmojiSelection = (value: EmojiT): void => {
    const reg = new RegExp(`.{${cursorPosition}}`);
    setText((prev) => prev.replace(reg, (match) => match + value.native));
    setCursorPosition((prev) => prev + 2);
  };

  // 2.0 Send Message
  const onSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!text || !conversationId) return;

    sendMessage({ params: { conversationId }, data: { text } });

    setText("");
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    onSendMessage();
  };

  return (
    <ChatContext.Provider
      value={{
        text,
        onEmojiSelection,
        handleBlur,
        onTextChange,
        onEnter,
        onSendMessage,
        showControl,
        getAdressat,
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

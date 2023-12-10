import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { chatActions } from "store/reducers/chat.reducer";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import {
  SendMessageArgsT,
  GetConversationArgsT,
  CreateConversationArgsT,
} from "interface/db/chat.types";

export default function useConversationQuery() {
  const dispatch = useAppDispatch();

  const messages = useAppSelector(selectConversationMessages);
  let messagesCount = useRef<number>(messages.length);

  const getConversation = (args: GetConversationArgsT) =>
    dispatch(chatActions.getConversation(args));

  const cleanUpConversation = (conversationId: string) => {
    dispatch(chatActions.cleanUpConversation());
    if (messagesCount.current === 0)
      dispatch(chatActions.deleteConversation({ conversationId }));
  };

  const sendMessage = (args: SendMessageArgsT) =>
    dispatch(chatActions.sendMessage(args));

  const createConversationAndGetAll = (args: CreateConversationArgsT) =>
    dispatch(chatActions.createConversationAndGetAll(args));

  useEffect(() => {
    if (messagesCount.current > 0) return;
    messagesCount.current = messages.length;
  }, [messages]);

  return {
    getConversation,
    cleanUpConversation,
    sendMessage,
    createConversationAndGetAll,
  };
}
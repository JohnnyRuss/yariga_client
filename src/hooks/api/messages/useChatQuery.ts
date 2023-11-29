import { useAppDispatch } from "store/hooks";

import {
  GetConversationArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
} from "interface/db/chat.types";
import { chatActions } from "store/reducers/chat.reducer";

export default function useChatQuery() {
  const dispatch = useAppDispatch();

  const getConversations = () => dispatch(chatActions.getConversations());

  const cleanUpConversations = () =>
    dispatch(chatActions.cleanUpConversations());

  const getConversation = (args: GetConversationArgsT) =>
    dispatch(chatActions.getConversation(args));

  const cleanUpConversation = () => dispatch(chatActions.cleanUpConversation());

  const deleteConversation = (args: DeleteConversationArgsT) =>
    dispatch(chatActions.deleteConversation(args));

  const createConversationAndGetAll = (args: CreateConversationArgsT) =>
    dispatch(chatActions.createConversationAndGetAll(args));

  return {
    getConversations,
    cleanUpConversations,
    getConversation,
    cleanUpConversation,
    deleteConversation,
    createConversationAndGetAll,
  };
}

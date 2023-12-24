import { useAppDispatch } from "store/hooks";

import {
  DeleteConversationArgsT,
  GetAllConversationsArgsT,
  MarkConversationAsReadArgsT,
} from "interface/db/chat.types";
import { chatActions } from "store/reducers/chat.reducer";

export default function useChatQuery() {
  const dispatch = useAppDispatch();

  const getConversations = () => dispatch(chatActions.getConversations());

  const getPaginatedConversations = (args: GetAllConversationsArgsT) =>
    dispatch(chatActions.getPaginatedConversations(args));

  const cleanUpConversations = () =>
    dispatch(chatActions.cleanUpConversations());

  const deleteConversation = (args: DeleteConversationArgsT) =>
    dispatch(chatActions.deleteConversation(args));

  const markConversationAsRead = (args: MarkConversationAsReadArgsT) =>
    dispatch(chatActions.markConversationAsRead(args));

  const getUnreadConversations = () =>
    dispatch(chatActions.getUnreadConversations());

  return {
    getConversations,
    deleteConversation,
    cleanUpConversations,
    getUnreadConversations,
    markConversationAsRead,
    getPaginatedConversations,
  };
}

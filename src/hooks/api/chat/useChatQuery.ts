import { useAppDispatch } from "store/hooks";

import {
  DeleteConversationArgsT,
  MarkConversationAsReadArgsT,
} from "interface/db/chat.types";
import { chatActions } from "store/reducers/chat.reducer";

export default function useChatQuery() {
  const dispatch = useAppDispatch();

  const getConversations = () => dispatch(chatActions.getConversations());

  const cleanUpConversations = () =>
    dispatch(chatActions.cleanUpConversations());

  const deleteConversation = (args: DeleteConversationArgsT) =>
    dispatch(chatActions.deleteConversation(args));

  const markConversationAsRead = (args: MarkConversationAsReadArgsT) => {
    console.log("runs mark as read");
    dispatch(chatActions.markConversationAsRead(args));
  };

  return {
    getConversations,
    cleanUpConversations,
    deleteConversation,
    markConversationAsRead,
  };
}

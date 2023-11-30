import { useAppDispatch } from "store/hooks";

import { chatActions } from "store/reducers/chat.reducer";
import { DeleteConversationArgsT } from "interface/db/chat.types";

export default function useChatQuery() {
  const dispatch = useAppDispatch();

  const getConversations = () => dispatch(chatActions.getConversations());

  const cleanUpConversations = () =>
    dispatch(chatActions.cleanUpConversations());

  const deleteConversation = (args: DeleteConversationArgsT) =>
    dispatch(chatActions.deleteConversation(args));

  return {
    getConversations,
    cleanUpConversations,
    deleteConversation,
  };
}

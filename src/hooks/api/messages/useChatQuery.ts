import { useAppDispatch } from "store/hooks";

import { chatActions } from "store/reducers/chat.reducer";
import { GetConversationArgsT } from "interface/db/chat.types";

export default function useChatQuery() {
  const dispatch = useAppDispatch();

  const getConversations = () => dispatch(chatActions.getConversations());

  const cleanUpConversations = () =>
    dispatch(chatActions.cleanUpConversations());

  const getConversation = (args: GetConversationArgsT) =>
    dispatch(chatActions.getConversation(args));

  const cleanUpConversation = () => dispatch(chatActions.cleanUpConversation());

  return {
    getConversations,
    cleanUpConversations,
    getConversation,
    cleanUpConversation,
  };
}

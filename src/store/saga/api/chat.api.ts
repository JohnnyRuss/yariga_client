import { axiosPrivateQuery } from "services/axios";
import { GetConversationArgsT } from "interface/db/chat.types";

export async function getConversationsQuery() {
  return axiosPrivateQuery.get("/chat");
}

export async function getConversationQuery(args: GetConversationArgsT) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}`);
}

import {
  GetConversationArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
  SendMessageArgsT,
} from "interface/db/chat.types";
import { axiosPrivateQuery } from "services/axios";

export async function getConversationsQuery() {
  return axiosPrivateQuery.get("/chat");
}

export async function getConversationQuery(args: GetConversationArgsT) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}`);
}

export async function deleteConversationQuery(args: DeleteConversationArgsT) {
  return axiosPrivateQuery.delete(`/chat/${args.conversationId}`);
}

export async function createConversationQuery(data: CreateConversationArgsT) {
  return axiosPrivateQuery.post(`/chat`, data);
}

export async function sendMessageQuery(data: SendMessageArgsT) {
  return axiosPrivateQuery.post(
    `/chat/${data.params.conversationId}/message`,
    data.data
  );
}

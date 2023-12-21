import {
  SendMessageArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
  MarkConversationAsReadArgsT,
} from "interface/db/chat.types";
import { axiosPrivateQuery } from "services/axios";
import { MAX_MESSAGE_PER_PAGE } from "config/config";

export async function getConversationsQuery() {
  return axiosPrivateQuery.get("/chat");
}

export async function getConversationQuery(args: { conversationId: string }) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}`);
}

export async function getConversationAssetsQuery(args: {
  conversationId: string;
}) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}/assets`);
}

export async function getConversationMessages(args: {
  page: number;
  conversationId: string;
}) {
  return axiosPrivateQuery.get(
    `/chat/${args.conversationId}/message?page=${args.page}&limit=${MAX_MESSAGE_PER_PAGE}`
  );
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

export async function markConversationAsReadQuery(
  args: MarkConversationAsReadArgsT
) {
  return axiosPrivateQuery.patch(
    `/chat/${args.conversationId}/read?read=${args.read}`
  );
}

import * as ChatApiT from "interface/db/chat.types";
import { axiosPrivateQuery } from "services/axios";
import { MAX_MESSAGE_PER_PAGE, MAX_CONVERSATION_PER_PAGE } from "config/config";

//_________________________________           CREATE CONVERSATION

export async function createConversationQuery(
  data: ChatApiT.CreateConversationArgsT
) {
  return axiosPrivateQuery.post(`/chat`, data);
}

//_________________________________           ALL CONVERSATIONS

export async function getConversationsQuery(
  args: ChatApiT.GetAllConversationsArgsT
) {
  return axiosPrivateQuery.get(
    `/chat?page=${args.page}&limit=${MAX_CONVERSATION_PER_PAGE}`
  );
}

//_________________________________           CONVERSATION

export async function getConversationQuery(
  args: ChatApiT.GetConversationArgsT
) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}`);
}

//_________________________________           CONVERSATION MESSAGES

export async function getConversationMessages(
  args: ChatApiT.GetConversationMessagesArgsT
) {
  return axiosPrivateQuery.get(
    `/chat/${args.conversationId}/message?page=${args.page}&limit=${MAX_MESSAGE_PER_PAGE}`
  );
}

//_________________________________           CONVERSATION ASSETS

export async function getConversationAssetsQuery(
  args: ChatApiT.GetConversationAssetsArgsT
) {
  return axiosPrivateQuery.get(`/chat/${args.conversationId}/assets`);
}

//_________________________________           SEND MESSAGE

export async function sendMessageQuery(data: ChatApiT.SendMessageArgsT) {
  return axiosPrivateQuery.post(
    `/chat/${data.params.conversationId}/message`,
    data.data
  );
}

//_________________________________           MARK CONVERSATION AS READ

export async function getUnreadConversationsQuery() {
  return axiosPrivateQuery.get(`/chat/unread`);
}

export async function markConversationAsReadQuery(
  args: ChatApiT.MarkConversationAsReadArgsT
) {
  return axiosPrivateQuery.patch(
    `/chat/${args.conversationId}/read?read=${args.read}`
  );
}

//_________________________________           DELETE CONVERSATION

export async function deleteConversationQuery(
  args: ChatApiT.DeleteConversationArgsT
) {
  return axiosPrivateQuery.delete(`/chat/${args.conversationId}`);
}

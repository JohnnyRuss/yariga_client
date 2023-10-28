import { axiosPrivateQuery } from "services/axios";

export async function getAllAgentsQuery() {
  return axiosPrivateQuery.get("/agents");
}

export async function getAgentQuery(data: { agentId: string }) {
  return axiosPrivateQuery.get(`/agents/${data.agentId}`);
}

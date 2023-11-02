import { axiosPrivateQuery } from "services/axios";

import { HireAgentArgsT } from "interface/db/agent.types";

export async function getAllAgentsQuery() {
  return axiosPrivateQuery.get("/agents");
}

export async function getAgentQuery(data: { agentId: string }) {
  return axiosPrivateQuery.get(`/agents/${data.agentId}`);
}

export async function hireAgentQuery(data: HireAgentArgsT) {
  return axiosPrivateQuery.post(
    `/agents/hire/${data.agentId}/${data.propertyId}`
  );
}

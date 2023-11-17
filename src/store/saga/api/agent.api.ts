import { axiosPrivateQuery } from "services/axios";

import { HireAgentArgsT, GetAgentsArgsT } from "interface/db/agent.types";

export async function getAllAgentsQuery(args: GetAgentsArgsT) {
  return axiosPrivateQuery.get(`/agents${args.query}`);
}

export async function getAgentQuery(data: { agentId: string }) {
  return axiosPrivateQuery.get(`/agents/${data.agentId}`);
}

export async function hireAgentQuery(data: HireAgentArgsT) {
  return axiosPrivateQuery.post(
    `/agents/hire/${data.agentId}/${data.propertyId}`
  );
}

export async function fireAgentQuery(data: HireAgentArgsT) {
  return axiosPrivateQuery.delete(
    `/agents/hire/${data.agentId}/${data.propertyId}`
  );
}

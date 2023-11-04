import {
  GetPropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
} from "interface/db/properties.types";
import { axiosPrivateQuery } from "services/axios";

export async function getAllPropertiesQuery() {
  return axiosPrivateQuery.get(`/properties`);
}

export async function getPropertyQuery(data: GetPropertyArgsT) {
  return axiosPrivateQuery.get(`/properties/${data.propertyId}`);
}

export async function getUserPropertiesQuery(data: GetUserPropertiesArgsT) {
  return axiosPrivateQuery.get(
    `/properties/user/${data.userId}?limit=${data.limit}`
  );
}

export async function getAgentPropertiesQuery(data: GetAgentPropertiesArgsT) {
  return axiosPrivateQuery.get(
    `/agents/${data.agentId}/properties?limit=${data.limit}`
  );
}

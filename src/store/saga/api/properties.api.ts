import {
  GetPropertyArgsT,
  DeletePropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
  GetAllPropertiesArgsT,
  GetRelatedPropertiesArgsT,
} from "interface/db/properties.types";
import { axiosPrivateQuery } from "services/axios";

export async function getAllPropertiesQuery(data: GetAllPropertiesArgsT) {
  return axiosPrivateQuery.get(`/properties${data.query}&limit=12`);
}

export async function getPropertyQuery(data: GetPropertyArgsT) {
  return axiosPrivateQuery.get(`/properties/${data.propertyId}`);
}

export async function deletePropertyQuery(data: DeletePropertyArgsT) {
  return axiosPrivateQuery.delete(`/properties/${data.propertyId}`);
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

export async function getRelatedPropertiesQuery(
  data: GetRelatedPropertiesArgsT
) {
  return axiosPrivateQuery.post("/properties/related", data);
}

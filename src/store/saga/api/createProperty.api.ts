import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "services/axios";
import {
  CreatePropertyArgsT,
  UpdatePropertyArgsT,
} from "interface/db/createProperty.types";

export async function getPropertyFormSuggestionsQuery() {
  return axiosPrivateQuery.get("/properties/suggestions");
}

export async function createPropertyQuery(data: CreatePropertyArgsT) {
  return axiosPrivateFormDataQuery.post("/properties", data);
}

export async function updatePropertyQuery({
  data,
  propertyId,
}: UpdatePropertyArgsT) {
  return axiosPrivateFormDataQuery.put(`/properties/${propertyId}`, data);
}

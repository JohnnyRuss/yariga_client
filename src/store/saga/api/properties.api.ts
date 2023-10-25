import {
  CreatePropertyArgsT,
  GetPropertyArgsT,
} from "interface/store/properties.types";
import { axiosPrivateFormDataQuery, axiosPrivateQuery } from "services/axios";

export async function getPropertyFormSuggestionsQuery() {
  return axiosPrivateQuery.get("/properties/suggestions");
}

export async function createPropertyQuery(data: CreatePropertyArgsT) {
  return axiosPrivateFormDataQuery.post("/properties", data);
}

export async function getPropertyFilterQuery() {
  return axiosPrivateQuery.get("/properties/filter");
}

export async function getAllPropertiesQuery() {
  return axiosPrivateQuery.get(`/properties`);
}

export async function getPropertyQuery(data: GetPropertyArgsT) {
  return axiosPrivateQuery.get(`/properties/${data.propertyId}`);
}

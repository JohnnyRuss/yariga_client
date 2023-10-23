import {
  axiosPrivateFormDataQuery,
  axiosPublicQuery,
  axiosPrivateQuery,
} from "services/axios";
import { CreatePropertyArgsT } from "interface/store/properties.types";

export async function getPropertyFormSuggestionsQuery() {
  return axiosPrivateQuery.get("/properties/suggestions");
}

export async function createPropertyQuery(data: CreatePropertyArgsT) {
  return axiosPrivateFormDataQuery.post("/properties", data);
}

export async function getPropertyFilterQuery() {
  return axiosPublicQuery.get("/properties/filter");
}

export async function getAllPropertiesQuery() {
  return axiosPublicQuery.get(`/properties${window.location.search}`);
}

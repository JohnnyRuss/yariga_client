import {
  axiosPrivateFormDataQuery,
  axiosPublicQuery,
  axiosPrivateQuery,
} from "services/axios";
import { CreatePropertyArgsT } from "interface/store/properties.types";

export async function getPropertyFormSuggestions() {
  return axiosPrivateQuery.get("/properties/suggestions");
}

export async function createProperty(data: CreatePropertyArgsT) {
  return axiosPrivateFormDataQuery.post("/properties", data);
}

export async function getAllPropertiesQuery() {
  return axiosPublicQuery.get("/properties");
}

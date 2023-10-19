import { axiosPrivateFormDataQuery, axiosPublicQuery } from "services/axios";
import { CreatePropertyArgsT } from "interface/store/properties.types";

export async function createProperty(data: CreatePropertyArgsT) {
  return axiosPrivateFormDataQuery.post("/properties", data);
}

export async function getAllPropertiesQuery() {
  return axiosPublicQuery.get("/properties");
}

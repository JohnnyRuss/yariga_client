import { axiosPrivateQuery } from "services/axios";

export async function getPropertyFilterQuery() {
  return axiosPrivateQuery.get("/properties/filter");
}

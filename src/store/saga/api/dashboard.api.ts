import { axiosPrivateQuery } from "services/axios";

export async function getDashboardDataQuery() {
  return await axiosPrivateQuery("/dashboard");
}

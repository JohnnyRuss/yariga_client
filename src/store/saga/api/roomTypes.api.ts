import { axiosPrivateQuery } from "services/axios";

export async function getAllRoomTypesQuery() {
  return axiosPrivateQuery.get(`/properties/rooms`);
}

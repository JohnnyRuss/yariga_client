import {
  OpenStreetMapLocationT,
  OpenStreetMapLocationResponseT,
} from "interface/config/config.types";
import axios, { AxiosResponse } from "axios";
import { OPEN_STREET_MAP_NOMINATIM_API_END_POINT } from "config/config";

export default async function getOpenStreetMapLocation(
  search: string
): Promise<OpenStreetMapLocationT[]> {
  const { data }: AxiosResponse<Array<OpenStreetMapLocationResponseT>> =
    await axios.get(`${OPEN_STREET_MAP_NOMINATIM_API_END_POINT}${search}`);

  return data.map((item) => ({
    name: item.name || "",
    displayName: item.display_name || "",
    city: item.address.city || item.address.town || "",
    country: item.address.country,
    state: item.address.state || "",
    addressType: item.addresstype || "",
    lat: item.lat || "",
    lon: item.lon || "",
  }));
}

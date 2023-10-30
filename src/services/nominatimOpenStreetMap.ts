import {
  OpenStreetMapLocationT,
  OpenStreetMapLocationResponseT,
} from "interface/config/config.types";
import axios, { AxiosResponse } from "axios";
import { OPEN_STREET_MAP_NOMINATIM_API_END_POINT } from "config/config";

export default async function getOpenStreetMapLocation(
  search: string
): Promise<OpenStreetMapLocationT[]> {
  const { data }: AxiosResponse<OpenStreetMapLocationResponseT[]> =
    await axios.get(`${OPEN_STREET_MAP_NOMINATIM_API_END_POINT}${search}`);

  return data.map((item) => ({
    name: item.name,
    display_name: item.display_name,
    city: item.address.city,
    country: item.address.country,
    state: item.address.state || "",
    addresstype: item.addresstype,
    lat: item.lat,
    lon: item.lon,
  }));
}

import axios, { AxiosResponse } from "axios";
import {
  OpenStreetMapLocationT,
  OpenStreetMapLocationResponseT,
} from "interface/config/config.types";

export default async function getOpenStreetMapLocation(
  search: string
): Promise<OpenStreetMapLocationT[]> {
  const { data }: AxiosResponse<OpenStreetMapLocationResponseT[]> =
    await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${search}`
    );

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

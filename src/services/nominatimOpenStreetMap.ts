import axios from "axios";
import { OpenStreetMapLocationT } from "interface/config/config.types";

export default async function getOpenStreetMapLocation(
  search: string
): Promise<OpenStreetMapLocationT[]> {
  const { data }: { data: OpenStreetMapLocationT[] } = await axios.get(
    `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
  );

  return data.map((item) => ({
    addresstype: item.addresstype,
    display_name: item.display_name,
    name: item.name,
    lat: item.lat,
    lon: item.lon,
  }));
}

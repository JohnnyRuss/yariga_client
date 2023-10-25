import { RouterHistoryT } from "interface/config/config.types";

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
  redirectUnAuthorized: () => {},
  redirectAuthorized: () => {},
};

const MAP_TILE_API_URL = "http://www.maptilesapi.com/";
const MAP_TILE_API_OSM_URL = "https://www.openstreetmap.org/copyright";
const MAP_TILE_RAPID_API_KEY =
  "610d12d72dmsh28ea76edd8e078ap1dda7ajsnbd2739d69e78";
const MAP_TILE_RAPID_API_URL = `https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${MAP_TILE_RAPID_API_KEY}`;

const MAP_TILE_ATTRIBUTION = `&copy; <a href='${MAP_TILE_API_URL}'>MapTiles API</a>, &copy; <a href='${MAP_TILE_API_OSM_URL}'>OpenStreetMap</a> contributors`;

export { RouterHistory, MAP_TILE_ATTRIBUTION, MAP_TILE_RAPID_API_URL };

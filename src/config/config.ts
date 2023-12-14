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
};

const OPEN_STREET_MAP_NOMINATIM_API_END_POINT =
  "https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=";

const MAP_TILE_API_URL = "http://www.maptilesapi.com/";
const MAP_TILE_API_OSM_URL = "https://www.openstreetmap.org/copyright";
const MAP_TILE_RAPID_API_KEY =
  "610d12d72dmsh28ea76edd8e078ap1dda7ajsnbd2739d69e78";

const MAP_TILE_RAPID_API_URL = `https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${MAP_TILE_RAPID_API_KEY}`;
const MAP_TILE_ATTRIBUTION = `&copy; <a href='${MAP_TILE_API_URL}'>MapTiles API</a>, &copy; <a href='${MAP_TILE_API_OSM_URL}'>OpenStreetMap</a> contributors`;

const CLOUDINARY_ROOT_URL =
  "https://res.cloudinary.com/dizw3yxcn/image/upload/";

const MAX_IMAGE_COUNT_PER_SMS = 15;

const MAX_IMAGE_SIZE_ON_CHAT = 10000000;

const YARIGA_JWT_KEY = "YARIGA_PASSPORT";

const USER_DEFAULT_AVATAR =
  "https://firebasestorage.googleapis.com/v0/b/mimitha-e1a81.appspot.com/o/user%2Favatar.jpg?alt=media&token=a8b2b035-af5f-42e3-be29-afa789303b84";

export {
  RouterHistory,
  MAP_TILE_ATTRIBUTION,
  MAP_TILE_RAPID_API_URL,
  OPEN_STREET_MAP_NOMINATIM_API_END_POINT,
  CLOUDINARY_ROOT_URL,
  MAX_IMAGE_COUNT_PER_SMS,
  MAX_IMAGE_SIZE_ON_CHAT,
  YARIGA_JWT_KEY,
  USER_DEFAULT_AVATAR,
};

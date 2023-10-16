import { NavigateFunction, Location } from "react-router-dom";

export interface RouterHistoryT {
  navigate: NavigateFunction | ((path: string) => void);
  location: Location;
  redirectUnAuthorized: () => void;
  redirectAuthorized: () => void;
}

export interface DecodedUserT {
  _id: string;
  email: string;
  exp: number;
  iat: number;
}

export interface OpenStreetMapLocationT {
  type: string;
  addresstype: string;
  name: string;
  display_name: string;
  lat: string;
  lon: string;
}

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

export interface OpenStreetMapLocationResponseT {
  address: {
    city: string;
    country: string;
    state: string | undefined;
  };
  name: string;
  display_name: string;
  addresstype: string;
  lat: string;
  lon: string;
}

export interface OpenStreetMapLocationT {
  name: string;
  display_name: string;
  city: string;
  country: string;
  state: string;
  addresstype: string;
  lat: string;
  lon: string;
}

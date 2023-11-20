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
    town?: string;
  };
  name: string;
  display_name: string;
  addresstype: string;
  lat: string;
  lon: string;
}

export interface OpenStreetMapLocationT {
  name: string;
  displayName: string;
  city: string;
  country: string;
  state: string;
  addressType: string;
  lat: string;
  lon: string;
}

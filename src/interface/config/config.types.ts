import { NavigateFunction, Location } from "react-router-dom";

type RouterHistoryT = {
  navigate: NavigateFunction | ((path: string) => void);
  location: Location;
  redirectUnAuthorized: () => void;
  redirectAuthorized: () => void;
};

type DecodedUserT = {
  _id: string;
  email: string;
  exp: number;
  iat: number;
};

type OpenStreetMapLocationResponseT = {
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
};

type OpenStreetMapLocationT = {
  name: string;
  displayName: string;
  city: string;
  country: string;
  state: string;
  addressType: string;
  lat: string;
  lon: string;
};

export type {
  RouterHistoryT,
  DecodedUserT,
  OpenStreetMapLocationResponseT,
  OpenStreetMapLocationT,
};

import {
  RoomTypeT,
  PropertyTypeT,
  PropertyStatusT,
  PropertyFeatureSuggestionT,
} from "interface/db/properties.types";
import { LoadingStatusT } from "./common.types";

export interface PropertiesFilterStateT {
  status: LoadingStatusT;
  filter: PropertyFilterT;
}

export interface PropertyFilterT {
  sort: Array<CommonFilterT>;
  statuses: Array<PropertyStatusT>;
  propertyTypes: Array<PropertyTypeT>;
  countries: Array<CommonFilterT>;
  cities: Array<CommonFilterT>;
  states: Array<CommonFilterT>;
  roomTypes: Array<RoomTypeT>;
  propertyFeatures: Array<PropertyFeatureSuggestionT>;
}

export interface ActivePropertyFilterT {
  search: string;
  "price[gte]": string;
  "price[lte]": string;
  sort: CommonFilterT;
  propertyStatus: PropertyStatusT;
  propertyType: PropertyTypeT;
  country: CommonFilterT;
  city: CommonFilterT;
  state: CommonFilterT;
  rooms: Array<RoomTypeT>;
  features: Array<PropertyFeatureSuggestionT>;
}

// PARTIALS
export interface CommonFilterT {
  _id: string;
  label: string;
  value: string;
}

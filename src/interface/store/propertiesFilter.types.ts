import {
  RoomTypeT,
  PropertyTypeT,
  PropertyStatusT,
  PropertyFeatureSuggestionT,
} from "interface/db/properties.types";
import { LoadingStatusT } from "./common.types";

type PropertiesFilterStateT = {
  status: LoadingStatusT;
  filter: PropertyFilterT;
};

type PropertyFilterT = {
  sort: Array<CommonFilterT>;
  propertyStatus: Array<PropertyStatusT>;
  propertyType: Array<PropertyTypeT>;
  country: Array<CommonFilterT>;
  state: Array<CommonFilterT>;
  rooms: Array<RoomTypeT>;
  features: Array<PropertyFeatureSuggestionT>;
  city: Array<CommonFilterT>;
};

type ActivePropertyFilterT = {
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
};

// PARTIALS
type CommonFilterT = {
  _id: string;
  label: string;
  value: string;
};

export type {
  PropertiesFilterStateT,
  PropertyFilterT,
  ActivePropertyFilterT,
  CommonFilterT,
};

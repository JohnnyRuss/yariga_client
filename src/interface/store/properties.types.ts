import {
  PropertyT,
  RoomTypeT,
  PropertyTypeT,
  PropertyStatus,
  PropertyStatusT,
  PropertyLocationT,
  PropertyShortInfoT,
  PropertySuggestionsT,
  PropertyFeatureSuggestionT,
} from "interface/db/properties.types";
import { LoadingStatusT } from "./common.types";

export interface PropertiesStateT {
  status: LoadingStatusT;
  filterStatus: LoadingStatusT;
  roomTypesStatus: LoadingStatusT;
  suggestions: PropertySuggestionsT;
  filter: PropertyFilterT;
  properties: Array<PropertyShortInfoT>;
  property: PropertyT;
  allRoomTypes: RoomTypeT[];
}

export interface CommonFilterT {
  _id: string;
  label: string;
  value: string;
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
  "minPrice[gte]": string;
  "maxPrice[lte]": string;
  sort: CommonFilterT;
  statuses: PropertyStatusT;
  propertyTypes: PropertyTypeT;
  countries: CommonFilterT;
  cities: CommonFilterT;
  states: CommonFilterT;
  roomTypes: Array<RoomTypeT>;
  propertyFeatures: Array<PropertyFeatureSuggestionT>;
}

export interface CreatePropertyArgsT {
  title: string;
  propertyStatus: keyof typeof PropertyStatus;
  price: number;
  propertyType: string;
  area: number;
  rooms: Array<string>;
  features: Array<string>;
  bedroomsAmount: number;
  bathroomsAmount?: number;
  location: PropertyLocationT;
  description: string;
  images?: Array<string>;
  new_images?: Array<File>;
  images_to_delete: Array<string>;
}

export interface GetPropertyArgsT {
  propertyId: string;
}

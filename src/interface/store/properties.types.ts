import {
  PropertyShortInfoT,
  PropertyStatus,
  PropertyStatusT,
  PropertyTypeT,
  RoomTypeT,
  PropertyFeatureT,
  PropertyLocationT,
  PropertySuggestionsT,
} from "interface/db/properties.types";
import { LoadingStatusT } from "./common.types";

export interface PropertiesStateT {
  status: LoadingStatusT;
  properties: Array<PropertyShortInfoT>;
  suggestions: PropertySuggestionsT;
  filter: PropertyFilterT;
}

export interface PropertyFilterT {
  statuses: Array<PropertyStatusT>;
  propertyTypes: Array<PropertyTypeT>;
  roomTypes: Array<RoomTypeT>;
  propertyFeatures: Array<PropertyFeatureT>;
  countries: Array<{ _id: string; value: string; label: string }>;
  cities: Array<{ _id: string; value: string; label: string }>;
  states: Array<{ _id: string; value: string; label: string }>;
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

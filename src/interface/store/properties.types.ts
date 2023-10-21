import {
  PropertyT,
  PropertyStatus,
  PropertyLocationT,
  PropertySuggestionsT,
} from "interface/db/properties.types";
import { LoadingStatusT } from "./common.types";

export interface PropertiesStateT {
  status: LoadingStatusT;
  properties: Array<PropertyT>;
  suggestions: PropertySuggestionsT;
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

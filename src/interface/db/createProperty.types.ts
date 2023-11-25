import {
  RoomTypeT,
  PropertyTypeT,
  PROPERTY_STATUS,
  PropertyStatusT,
  PropertyLocationT,
  PropertyFeatureSuggestionT,
} from "./properties.types";

type PropertySuggestionsT = {
  roomTypes: RoomTypeT[];
  propertyTypes: PropertyTypeT[];
  propertyStatuses: PropertyStatusT[];
  propertyFeatures: PropertyFeatureSuggestionT[];
};

// API
type CreatePropertyArgsT = {
  title: string;
  propertyStatus: keyof typeof PROPERTY_STATUS;
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
};

type UpdatePropertyArgsT = {
  data: CreatePropertyArgsT;
  propertyId: string;
};

export type { PropertySuggestionsT, CreatePropertyArgsT, UpdatePropertyArgsT };

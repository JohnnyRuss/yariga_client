import {
  RoomTypeT,
  PropertyTypeT,
  PropertyStatus,
  PropertyStatusT,
  PropertyLocationT,
  PropertyFeatureSuggestionT,
} from "./properties.types";

export interface PropertySuggestionsT {
  roomTypes: RoomTypeT[];
  propertyTypes: PropertyTypeT[];
  propertyStatuses: PropertyStatusT[];
  propertyFeatures: PropertyFeatureSuggestionT[];
}

// API
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

export interface PropertySuggestionsT {
  propertyFeatures: PropertyFeatureSuggestionT[];
  propertyTypes: PropertyTypeT[];
  roomTypes: RoomTypeT[];
  propertyStatuses: PropertyStatusT[];
}

export interface PropertyT {
  _id: string;
  owner: PropertyOwnerT;
  title: string;
  propertyStatus: keyof typeof PropertyStatus;
  price: number;
  propertyType: PropertyTypeT;
  area: number;
  rooms: Array<RoomTypeT>;
  features: Array<PropertyFeatureT>;
  bedroomsAmount: number;
  bathroomsAmount?: number;
  location: PropertyLocationT;
  description: string;
  images: Array<string>;
}

export interface PropertyShortInfoT {
  _id: string;
  images: Array<string>;
  title: string;
  price: number;
  propertyStatus: keyof typeof PropertyStatus;
  propertyType: PropertyTypeT;
  location: PropertyLocationT;
  owner: PropertyOwnerT;
  area: number;
  bedroomsAmount: number;
  bathroomsAmount?: number;
}

export interface PropertyFilterResponseT {
  sort: Array<{ label: string; value: string }>;
  statuses: Array<PropertyStatusT>;
  propertyTypes: Array<PropertyTypeT>;
  roomTypes: Array<RoomTypeT>;
  propertyFeatures: Array<PropertyFeatureT>;
  countries: Array<string>;
  cities: Array<string>;
  states: Array<string>;
}

// PARTIALS

export interface PropertyLocationT {
  name: string;
  displayName: string;
  city: string;
  country: string;
  state: string;
  addressType: string;
  lat: string;
  lon: string;
}

export enum PropertyStatus {
  SALE = "SALE",
  RENT = "RENT",
}

export interface PropertyOwnerT {
  _id: string;
  email: string;
  username: string;
  avatar: string;
}

export interface PropertyTypeT {
  _id: string;
  label: string;
  value: string;
}

export interface PropertyFeatureT {
  _id: string;
  label: string;
  value: string;
  icon: string;
}

export type PropertyFeatureSuggestionT = Omit<PropertyFeatureT, "icon">;

export interface RoomTypeT {
  _id: string;
  label: string;
  value: string;
}

export interface PropertyStatusT {
  _id: string;
  label: string;
  value: string;
}

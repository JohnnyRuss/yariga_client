import { AgentShortInfoT } from "./agent.types";

export interface PropertyT {
  _id: string;
  owner: PropertyOwnerT;
  agent?: AgentShortInfoT | null;
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
  avgRating: number;
}

export interface PropertyShortInfoT {
  _id: string;
  images: Array<string>;
  title: string;
  price: number;
  propertyStatus: keyof typeof PropertyStatus;
  propertyType: PropertyTypeT;
  location: PropertyLocationT;
  owner: PropertyOwnerShortT;
  agent?: PropertyOwnerShortT | null;
  area: number;
  bedroomsAmount: number;
  bathroomsAmount?: number;
  avgRating: number;
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

export interface PropertyOwnerShortT {
  _id: string;
  email: string;
  username: string;
  avatar: string;
}

export interface PropertyOwnerT {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  phone: string;
  properties: Array<string>;
  location: PropertyLocationT;
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

// API
export interface GetPropertyArgsT {
  propertyId: string;
}

export interface GetUserPropertiesArgsT {
  userId: string;
  limit?: number;
}

export interface GetAgentPropertiesArgsT {
  agentId: string;
  limit?: number;
}

export type GetAllPropertiesArgsT = {
  query: string;
};

export type GetAllPropertiesResponseT = {
  properties: Array<PropertyShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

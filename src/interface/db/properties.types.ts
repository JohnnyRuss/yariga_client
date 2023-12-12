import { AgentShortInfoT } from "./agent.types";
import { ReviewShortInfoT } from "./reviews.types";

type PropertyT = {
  _id: string;
  owner: PropertyOwnerT;
  agent?: AgentShortInfoT | null;
  title: string;
  propertyStatus: keyof typeof PROPERTY_STATUS;
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
  reviews: Array<ReviewShortInfoT>;
};

type PropertyShortInfoT = {
  _id: string;
  images: Array<string>;
  title: string;
  price: number;
  propertyStatus: keyof typeof PROPERTY_STATUS;
  propertyType: PropertyTypeT;
  location: PropertyLocationT;
  owner: PropertyOwnerShortT;
  agent?: PropertyOwnerShortT | null;
  area: number;
  bedroomsAmount: number;
  bathroomsAmount?: number;
  avgRating: number;
};

// PARTIALS
type PropertyLocationT = {
  name: string;
  displayName: string;
  city: string;
  country: string;
  state: string;
  addressType: string;
  lat: string;
  lon: string;
};

enum PROPERTY_STATUS {
  SALE = "SALE",
  RENT = "RENT",
}

type PropertyOwnerShortT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  role: "AGENT" | "USER";
};

type PropertyOwnerT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  phone: string;
  properties: Array<string>;
  location: PropertyLocationT;
  account?: string;
};

type PropertyTypeT = {
  _id: string;
  label: string;
  value: string;
};

type PropertyFeatureT = {
  _id: string;
  label: string;
  value: string;
  icon: string;
};

type PropertyFeatureSuggestionT = Omit<PropertyFeatureT, "icon">;

type RoomTypeT = {
  _id: string;
  label: string;
  value: string;
};

type PropertyStatusT = {
  _id: string;
  label: string;
  value: string;
};

// API
type GetPropertyArgsT = {
  propertyId: string;
};

type DeletePropertyArgsT = {
  propertyId: string;
};

type GetUserPropertiesArgsT = {
  userId: string;
  limit?: number;
};

type GetAgentPropertiesArgsT = {
  agentId: string;
  limit?: number;
};

type GetAllPropertiesArgsT = {
  query: string;
};

type GetAllPropertiesResponseT = {
  properties: Array<PropertyShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

type GetRelatedPropertiesArgsT = {
  featureIds: Array<string>;
  roomIds: Array<string>;
  activePropertyId: string;
};

export type {
  PropertyT,
  PropertyShortInfoT,
  // PARTIALS
  PropertyOwnerShortT,
  PropertyOwnerT,
  PropertyTypeT,
  RoomTypeT,
  PropertyFeatureT,
  PropertyLocationT,
  PropertyFeatureSuggestionT,
  PropertyStatusT,
  // API
  GetPropertyArgsT,
  DeletePropertyArgsT,
  GetUserPropertiesArgsT,
  GetAllPropertiesArgsT,
  GetAllPropertiesResponseT,
  GetAgentPropertiesArgsT,
  GetRelatedPropertiesArgsT,
};
export { PROPERTY_STATUS };

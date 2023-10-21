export interface PropertySuggestionsT {
  propertyFeatures: PropertyFeatureT[];
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

interface PropertyOwnerT {
  _id: string;
  email: string;
  username: string;
  avatar: string;
}

interface PropertyFeatureT {
  _id: string;
  label: string;
  value: string;
  icon: string;
}

interface PropertyTypeT {
  _id: string;
  label: string;
  value: string;
}

interface RoomTypeT {
  _id: string;
  label: string;
  value: string;
}

interface PropertyStatusT {
  _id: string;
  label: string;
  value: string;
}

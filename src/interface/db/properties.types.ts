export interface PropertySuggestionsT {
  propertyFeatures: PropertyFeatureT[];
  propertyTypes: PropertyTypeT[];
  roomTypes: RoomTypeT[];
  propertyStatuses: PropertyStatusT[];
}

export interface PropertyT {
  _id: string;
  title: string;
  description: string;
  propertyType: string;
  location: PropertyLocationT;
  price: number;
  images: Array<string>;
  owner: PropertyOwnerT;
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

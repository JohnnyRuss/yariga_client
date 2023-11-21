import {
  RoomTypeT,
  PropertyTypeT,
  PropertyStatusT,
  PropertyFeatureT,
} from "./properties.types";

type PropertyFilterResponseT = {
  sort: Array<{ label: string; value: string }>;
  statuses: Array<PropertyStatusT>;
  propertyTypes: Array<PropertyTypeT>;
  roomTypes: Array<RoomTypeT>;
  propertyFeatures: Array<PropertyFeatureT>;
  countries: Array<string>;
  cities: Array<string>;
  states: Array<string>;
};

export type { PropertyFilterResponseT };

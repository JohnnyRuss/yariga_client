import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";

const selectedPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.status.error,
  loading: properties.status.loading,
  message: properties.status.message,
  status: properties.status.status,
});

const selectedPropertyFilterStatus = ({ properties }: RootStateT) => ({
  error: properties.filterStatus.error,
  loading: properties.filterStatus.loading,
  message: properties.filterStatus.message,
  status: properties.filterStatus.status,
});

const selectedPropertyFilter = ({ properties }: RootStateT) => ({
  sort: properties.filter.sort,
  statuses: properties.filter.statuses,
  cities: properties.filter.cities,
  countries: properties.filter.countries,
  propertyFeatures: properties.filter.propertyFeatures,
  propertyTypes: properties.filter.propertyTypes,
  roomTypes: properties.filter.roomTypes,
  states: properties.filter.states,
});

const selectedProperty = ({ properties }: RootStateT) => ({
  _id: properties.property._id,
  owner: properties.property.owner,
  title: properties.property.title,
  description: properties.property.description,
  propertyStatus: properties.property.propertyStatus,
  propertyType: properties.property.propertyType,
  area: properties.property.area,
  rooms: properties.property.rooms,
  features: properties.property.features,
  bedroomsAmount: properties.property.bathroomsAmount,
  bathroomsAmount: properties.property.bathroomsAmount,
  price: properties.property.price,
  location: properties.property.location,
  images: properties.property.images,
});

const selectedPropertySuggestions = ({ properties }: RootStateT) =>
  properties.suggestions;

const selectPropertiesStatus = createSelector(
  selectedPropertiesStatus,
  (status) => status
);

const selectPropertyFilterStatus = createSelector(
  selectedPropertyFilterStatus,
  (status) => status
);

const selectPropertySuggestions = createSelector(
  selectedPropertySuggestions,
  (suggestions) => suggestions
);

const selectPropertyFilter = createSelector(
  selectedPropertyFilter,
  (filter) => filter
);

const selectProperty = createSelector(selectedProperty, (property) => property);

const selectAllProperties = ({ properties }: RootStateT) =>
  properties.properties;

const selectPropertyRoomTypes = ({ properties }: RootStateT) =>
  properties.allRoomTypes;

export {
  selectPropertiesStatus,
  selectPropertyFilterStatus,
  selectPropertySuggestions,
  selectPropertyFilter,
  selectAllProperties,
  selectPropertyRoomTypes,
  selectProperty,
};

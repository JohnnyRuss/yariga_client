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

const selectAllProperties = ({ properties }: RootStateT) =>
  properties.properties;

export {
  selectPropertiesStatus,
  selectPropertyFilterStatus,
  selectAllProperties,
  selectPropertySuggestions,
  selectPropertyFilter,
};

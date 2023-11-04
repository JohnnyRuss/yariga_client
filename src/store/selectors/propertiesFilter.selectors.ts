import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedPropertyFilterStatus = ({ propertiesFilter }: RootStateT) => ({
  error: propertiesFilter.status.error,
  loading: propertiesFilter.status.loading,
  message: propertiesFilter.status.message,
  status: propertiesFilter.status.status,
});

const selectedPropertyFilter = ({ propertiesFilter }: RootStateT) => ({
  sort: propertiesFilter.filter.sort,
  statuses: propertiesFilter.filter.statuses,
  cities: propertiesFilter.filter.cities,
  countries: propertiesFilter.filter.countries,
  propertyFeatures: propertiesFilter.filter.propertyFeatures,
  propertyTypes: propertiesFilter.filter.propertyTypes,
  roomTypes: propertiesFilter.filter.roomTypes,
  states: propertiesFilter.filter.states,
});

const selectPropertyFilterStatus = createSelector(
  selectedPropertyFilterStatus,
  (status) => status
);
const selectPropertyFilter = createSelector(
  selectedPropertyFilter,
  (filter) => filter
);

export { selectPropertyFilterStatus, selectPropertyFilter };

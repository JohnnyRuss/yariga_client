import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";

// MEMORISED SELECTORS

const selectedAllPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.allPropertiesStatus.error,
  loading: properties.allPropertiesStatus.loading,
  message: properties.allPropertiesStatus.message,
  status: properties.allPropertiesStatus.status,
});

const selectedSinglePropertyStatus = ({ properties }: RootStateT) => ({
  error: properties.singlePropertyStatus.error,
  loading: properties.singlePropertyStatus.loading,
  message: properties.singlePropertyStatus.message,
  status: properties.singlePropertyStatus.status,
});

const selectedUserPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.userPropertiesStatus.error,
  loading: properties.userPropertiesStatus.loading,
  message: properties.userPropertiesStatus.message,
  status: properties.userPropertiesStatus.status,
});

const selectedAgentPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.agentPropertiesStatus.error,
  loading: properties.agentPropertiesStatus.loading,
  message: properties.agentPropertiesStatus.message,
  status: properties.agentPropertiesStatus.status,
});

const selectedRelatedPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.relatedPropertiesStatus.error,
  loading: properties.relatedPropertiesStatus.loading,
  message: properties.relatedPropertiesStatus.message,
  status: properties.relatedPropertiesStatus.status,
});

const selectedProperty = ({ properties }: RootStateT) => ({
  _id: properties.property._id,
  owner: properties.property.owner,
  agent: properties.property.agent,
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
  avgRating: properties.property.avgRating,
  reviews: properties.property.reviews,
});

const selectedAlProperties = ({ properties }: RootStateT) => ({
  properties: properties.properties,
  currentPage: properties.currentPage,
  pagesCount: properties.pagesCount,
});

// SELECTORS

const selectAllPropertiesStatus = createSelector(
  selectedAllPropertiesStatus,
  (status) => status
);

const selectSinglePropertyStatus = createSelector(
  selectedSinglePropertyStatus,
  (status) => status
);

const selectUserPropertiesStatus = createSelector(
  selectedUserPropertiesStatus,
  (status) => status
);

const selectAgentPropertiesStatus = createSelector(
  selectedAgentPropertiesStatus,
  (status) => status
);

const selectRelatedPropertiesStatus = createSelector(
  selectedRelatedPropertiesStatus,
  (status) => status
);

const selectProperty = createSelector(selectedProperty, (property) => property);

const selectAllProperties = createSelector(
  selectedAlProperties,
  (properties) => properties
);

const selectAgentProperties = ({ properties }: RootStateT) =>
  properties.agentProperties;

const selectRelatedProperties = ({ properties }: RootStateT) =>
  properties.relatedProperties;

const selectUserProperties = ({ properties }: RootStateT) =>
  properties.userProperties;

export {
  selectAllPropertiesStatus,
  selectSinglePropertyStatus,
  selectUserPropertiesStatus,
  selectAgentPropertiesStatus,
  selectRelatedPropertiesStatus,
  selectAllProperties,
  selectAgentProperties,
  selectUserProperties,
  selectRelatedProperties,
  selectProperty,
};

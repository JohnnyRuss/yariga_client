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

const selectProperty = createSelector(selectedProperty, (property) => property);

const selectAllProperties = ({ properties }: RootStateT) =>
  properties.properties;

const selectAgentProperties = ({ properties }: RootStateT) =>
  properties.agentProperties;

const selectUserProperties = ({ properties }: RootStateT) =>
  properties.userProperties;

export {
  selectAllPropertiesStatus,
  selectSinglePropertyStatus,
  selectUserPropertiesStatus,
  selectAgentPropertiesStatus,
  selectAllProperties,
  selectAgentProperties,
  selectUserProperties,
  selectProperty,
};

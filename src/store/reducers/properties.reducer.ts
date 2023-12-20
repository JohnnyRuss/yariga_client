import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  PropertyT,
  PropertyShortInfoT,
  GetPropertyArgsT,
  DeletePropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
  GetAllPropertiesArgsT,
  GetAllPropertiesResponseT,
  GetRelatedPropertiesArgsT,
} from "interface/db/properties.types";
import { AddReviewResponseT } from "interface/db/reviews.types";
import { HireAgentResponseT } from "interface/db/agent.types";
import { PropertiesStateT } from "interface/store/properties.types";

const initialState: PropertiesStateT = {
  singlePropertyStatus: status.default(),

  allPropertiesStatus: status.default(),

  userPropertiesStatus: status.default(),

  agentPropertiesStatus: status.default(),

  relatedPropertiesStatus: status.default(),

  deletePropertiesStatus: status.default(),

  properties: [],

  currentPage: 1,

  pagesCount: 1,

  agentProperties: [],

  userProperties: [],

  relatedProperties: [],

  property: {
    _id: "",
    owner: {
      _id: "",
      avatar: "",
      email: "",
      username: "",
      phone: "",
      properties: [],
      location: {
        name: "",
        displayName: "",
        country: "",
        state: "",
        city: "",
        addressType: "",
        lat: "",
        lon: "",
      },
    },
    agent: null,
    title: "",
    description: "",
    propertyStatus: "RENT",
    propertyType: {
      _id: "",
      label: "",
      value: "",
    },
    area: NaN,
    rooms: [],
    features: [],
    bedroomsAmount: NaN,
    bathroomsAmount: NaN,
    price: NaN,
    location: {
      name: "",
      displayName: "",
      country: "",
      state: "",
      city: "",
      addressType: "",
      lat: "",
      lon: "",
    },
    images: [],
    avgRating: 0,
    reviews: [],
  },
};

const propertiesSlice = createSlice({
  name: "yariga_properties",
  initialState,
  reducers: {
    // ALL PROPERTIES
    getAllProperties: {
      prepare: (payload: GetAllPropertiesArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.allPropertiesStatus = status.loading();
      },
    },

    setAllProperties(
      state,
      { payload }: PayloadAction<GetAllPropertiesResponseT>
    ) {
      state.properties = payload.properties;
      state.currentPage = payload.currentPage;
      state.pagesCount = payload.pagesCount;
      state.allPropertiesStatus = status.default();
    },

    setAllPropertiesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.allPropertiesStatus = setStatus({
        stage,
        message: message || "Failed to read properties",
      });
    },

    cleanUpAllProperties(state) {
      state.properties = initialState.properties;
      state.pagesCount = initialState.pagesCount;
      state.currentPage = initialState.currentPage;
    },

    // USER PROPERTIES
    getUserProperties: {
      prepare: (payload: GetUserPropertiesArgsT) => {
        return {
          payload: {
            userId: payload.userId,
            limit: payload.limit || 3,
          },
        };
      },

      reducer: (state) => {
        state.userPropertiesStatus = status.loading();
      },
    },

    setUserProperties(
      state,
      { payload }: PayloadAction<Array<PropertyShortInfoT>>
    ) {
      state.userProperties = payload;
      state.userPropertiesStatus = status.default();
    },

    setUserPropertiesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.userPropertiesStatus = setStatus({
        stage,
        message: message || "Failed to read user properties",
      });
    },

    cleanUpUserProperties(state) {
      state.userProperties = initialState.userProperties;
    },

    // AGENT PROPERTIES
    getAgentProperties: {
      prepare: (payload: GetAgentPropertiesArgsT) => {
        return {
          payload: {
            agentId: payload.agentId,
            limit: payload.limit || 3,
          },
        };
      },

      reducer: (state) => {
        state.agentPropertiesStatus = status.loading();
      },
    },

    setAgentProperties(
      state,
      { payload }: PayloadAction<Array<PropertyShortInfoT>>
    ) {
      state.agentProperties = payload;
      state.agentPropertiesStatus = status.default();
    },

    setAgentPropertiesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.agentPropertiesStatus = setStatus({
        stage,
        message: message || "Failed to read agent properties",
      });
    },

    cleanUpAgentProperties(state) {
      state.agentProperties = initialState.agentProperties;
    },

    // PROPERTY DETAILS
    getProperty: {
      prepare: (payload: GetPropertyArgsT) => {
        return {
          payload,
        };
      },

      reducer: (state) => {
        state.singlePropertyStatus = status.loading();
      },
    },

    setProperty(state, { payload }: PayloadAction<PropertyT>) {
      state.property = {
        ...payload,
        reviews: payload.reviews.map((review) => ({
          ...review,
          property: {
            _id: review.property._id,
            price: review.property.price,
            title: review.property.title,
            thumbnail: review.property.images[0],
            propertyStatus: review.property.propertyStatus,
          },
        })),
      };
      state.singlePropertyStatus = status.success("SUCCESS");
    },

    setPropertyStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.singlePropertyStatus = setStatus({
        stage,
        message: message || "Failed to read property details",
      });
    },

    cleanUpProperty(state) {
      state.property = initialState.property;
    },

    // RELATED PROPERTIES
    getRelatedProperties: {
      prepare: (payload: GetRelatedPropertiesArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.relatedPropertiesStatus = status.loading();
      },
    },

    setRelatedProperties(
      state,
      { payload }: PayloadAction<Array<PropertyShortInfoT>>
    ) {
      state.relatedProperties = payload;
      state.relatedPropertiesStatus = status.default();
    },

    setRelatedPropertiesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.relatedPropertiesStatus = setStatus({
        stage,
        message: message || "Failed to read related properties",
      });
    },

    cleanUpRelatedProperties(state) {
      state.agentProperties = initialState.agentProperties;
    },

    // DELETE PROPERTY
    deleteProperty: {
      prepare: (payload: DeletePropertyArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.deletePropertiesStatus = status.loading();
      },
    },

    setDeletedProperty(state) {
      state.deletePropertiesStatus = status.success("SUCCESS");
    },

    setDeletePropertyStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.deletePropertiesStatus = setStatus({
        stage,
        message: message || "Failed to read related properties",
      });
    },

    // HIRE/FIRE AGENT
    setHiredAgent(state, { payload }: PayloadAction<HireAgentResponseT>) {
      state.property.agent = {
        ...payload,
        listing: payload.listing.map((property) => property._id),
      };
    },

    setFiredAgent(state) {
      state.property.agent = null;
    },

    setPropertyRate(state, { payload }: PayloadAction<AddReviewResponseT>) {
      state.property.avgRating = payload.avgRating;
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice.reducer;

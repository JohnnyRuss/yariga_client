import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PropertiesStateT } from "interface/store/properties.types";

import {
  PropertyT,
  PropertyShortInfoT,
  GetPropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
  RatePropertyArgsT,
  RatePropertyResponseT,
} from "interface/db/properties.types";
import { HireAgentResponseT } from "interface/db/agent.types";

import { controlStatus as status } from "./helpers";

const initialState: PropertiesStateT = {
  singlePropertyStatus: status.default(),

  allPropertiesStatus: status.default(),

  userPropertiesStatus: status.default(),

  agentPropertiesStatus: status.default(),

  properties: [],

  agentProperties: [],

  userProperties: [],

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
  },
};

const propertiesSlice = createSlice({
  name: "yariga_properties",
  initialState,
  reducers: {
    getAllProperties: {
      prepare: (payload) => {
        return { payload: {} };
      },

      reducer: (state) => {
        state.allPropertiesStatus = status.loading();
      },
    },

    setAllProperties(
      state,
      { payload }: PayloadAction<Array<PropertyShortInfoT>>
    ) {
      state.properties = payload;
      state.allPropertiesStatus = status.default();
    },

    cleanUpAllProperties(state) {
      state.properties = initialState.properties;
    },

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

    cleanUpUserProperties(state) {
      state.userProperties = initialState.userProperties;
    },

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

    cleanUpAgentProperties(state) {
      state.agentProperties = initialState.agentProperties;
    },

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
      state.property = payload;
      state.singlePropertyStatus = status.default();
    },

    cleanUpProperty(state) {
      state.property = initialState.property;
    },

    setHiredAgent(state, { payload }: PayloadAction<HireAgentResponseT>) {
      state.property.agent = {
        ...payload,
        listing: payload.listing.map((property) => property._id),
      };
    },

    setFiredAgent(state) {
      state.property.agent = null;
    },

    rateProperty: {
      prepare: (payload: RatePropertyArgsT) => {
        const credentials: RatePropertyArgsT = {
          propertyId: payload.propertyId,
          data: {
            score: payload.data.score,
          },
        };

        if (payload.data.review) credentials.data.review = payload.data.review;

        return { payload: credentials };
      },

      reducer: (state) => {},
    },

    setPropertyRate(state, { payload }: PayloadAction<RatePropertyResponseT>) {
      state.property.avgRating = payload.avgRating;
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice.reducer;

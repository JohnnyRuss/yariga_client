import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

import {
  PropertiesStateT,
  GetPropertyArgsT,
  CreatePropertyArgsT,
} from "interface/store/properties.types";

import {
  PropertyT,
  RoomTypeT,
  PropertyShortInfoT,
  PropertySuggestionsT,
  PropertyFilterResponseT,
} from "interface/db/properties.types";

import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";

import paths from "config/paths";
import FileControl from "utils/FileControl";
import { RouterHistory } from "config/config";
import { controlStatus as status } from "./helpers";

const initialState: PropertiesStateT = {
  status: status.default(),

  filterStatus: status.default(),

  roomTypesStatus: status.default(),

  properties: [],

  allRoomTypes: [],

  property: {
    _id: "",
    owner: {
      _id: "",
      avatar: "",
      email: "",
      username: "",
    },
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
  },

  suggestions: {
    propertyFeatures: [],
    propertyStatuses: [],
    propertyTypes: [],
    roomTypes: [],
  },

  filter: {
    sort: [],
    statuses: [],
    cities: [],
    countries: [],
    propertyFeatures: [],
    propertyTypes: [],
    roomTypes: [],
    states: [],
  },
};

const propertiesSlice = createSlice({
  name: "yariga_properties",
  initialState,
  reducers: {
    getPropertyFormSuggestions(state) {
      state.status = status.loading();
    },

    setPropertyFormSuggestions(
      state,
      { payload }: PayloadAction<PropertySuggestionsT>
    ) {
      state.suggestions = payload;
      state.status = status.default();
    },

    createProperty: {
      prepare: (payload: CreatePropertyFormT) => {
        return { payload: prepareDataForDB(payload) };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setCreateProperty(state) {
      RouterHistory.navigate(paths.properties_page);
      state.status = status.default();
    },

    getPropertyFilter(state) {
      state.filterStatus = status.loading();
    },

    setPropertyFilter(
      state,
      { payload }: PayloadAction<PropertyFilterResponseT>
    ) {
      const moderator = (data: Array<string>) =>
        data.map((value) => ({
          _id: nanoid(),
          label: value,
          value: value,
        }));

      state.filter = {
        sort: payload.sort.map((value) => ({ _id: nanoid(), ...value })),
        cities: moderator(payload.cities),
        countries: moderator(payload.countries),
        states: moderator(payload.states),
        propertyFeatures: payload.propertyFeatures,
        propertyTypes: payload.propertyTypes,
        roomTypes: payload.roomTypes,
        statuses: payload.statuses,
      };

      state.filterStatus = status.success("SUCCESS");
    },

    getAllProperties: {
      prepare: (payload) => {
        return { payload: {} };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setAllProperties(
      state,
      { payload }: PayloadAction<Array<PropertyShortInfoT>>
    ) {
      state.properties = payload;
      state.status = status.default();
    },

    getAllRoomTypes(state) {
      state.roomTypesStatus = status.loading();
    },

    setAllRoomTypes(state, { payload }: PayloadAction<RoomTypeT[]>) {
      state.allRoomTypes = payload;
      state.roomTypesStatus = status.default();
    },

    getProperty: {
      prepare: (payload: GetPropertyArgsT) => {
        return {
          payload,
        };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setProperty(state, { payload }: PayloadAction<PropertyT>) {
      state.property = payload;
      state.status = status.default();
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice.reducer;

function prepareDataForDB(data: CreatePropertyFormT): CreatePropertyArgsT {
  const credentials: CreatePropertyArgsT = {
    title: data.title,
    propertyStatus: data.propertyStatus.value,
    price: +data.price,
    propertyType: data.propertyType._id,
    area: +data.area,
    rooms: data.rooms.map((item) => item._id),
    features: data.features.map((item) => item._id),
    bedroomsAmount: +data.bedroomsAmount,
    location: {
      name: data.location.name,
      displayName: data.location.display_name,
      city: data.location.city,
      country: data.location.country,
      state: data.location.state,
      addressType: data.location.addresstype,
      lat: data.location.lat,
      lon: data.location.lon,
    },
    description: data.description,
    images: data.images || [],
    images_to_delete: data.images_to_delete || [],
  };

  if (Array.isArray(data.new_images) && data.new_images[0])
    credentials.new_images = FileControl.convertMultipleBase64StrToFile(
      data.new_images
    );

  if (data.bathroomsAmount) credentials.bathroomsAmount = +data.bathroomsAmount;

  return credentials;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { paths } from "config/paths";
import { RouterHistory } from "config/config";
import FileControl from "utils/FileControl";

import {
  PropertySuggestionsT,
  CreatePropertyArgsT,
} from "interface/db/createProperty.types";
import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";
import { CreatePropertyFormStateT } from "interface/store/createPropertyForm.types";

const initialState: CreatePropertyFormStateT = {
  status: status.default(),

  suggestions: {
    propertyFeatures: [],
    propertyStatuses: [],
    propertyTypes: [],
    roomTypes: [],
  },
};

const createPropertyFormSlice = createSlice({
  name: "yariga-create-property-form",
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

    cleanUpPropertySuggestions(state) {
      state.suggestions = initialState.suggestions;
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
  },
});

export default createPropertyFormSlice.reducer;
export const createPropertyFormActions = createPropertyFormSlice.actions;

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
    location: data.location,
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

import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import FileControl from "utils/FileControl";

import {
  PropertySuggestionsT,
  CreatePropertyArgsT,
} from "interface/db/createProperty.types";
import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";
import { CreatePropertyFormStateT } from "interface/store/createPropertyForm.types";

import { isBase64Str } from "utils/zod/helpers/customValidators";

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
    // SUGGESTIONS
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

    // CREATE
    createProperty: {
      prepare: (payload: CreatePropertyFormT) => {
        return { payload: prepareDataForDB(payload) };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    updateProperty: {
      prepare: (payload: { data: CreatePropertyFormT; propertyId: string }) => {
        return {
          payload: {
            data: prepareDataForDB(payload.data),
            propertyId: payload.propertyId,
          },
        };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setCreateProperty(state) {
      RouterHistory.navigate(PATHS.properties_page);
      state.status = status.default();
    },

    setCreatePropertyStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.status = setStatus({
        stage,
        message: message || "Failed to create property",
      });
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
    images_to_delete: data.images_to_delete || [],
  };

  credentials.images = data.images.filter((img) => !isBase64Str(img)) || [];

  const new_images: Array<string> = data.images.filter((img) =>
    isBase64Str(img)
  );

  if (new_images[0])
    credentials.new_images =
      FileControl.convertMultipleBase64StrToFile(new_images);

  if (data.bathroomsAmount) credentials.bathroomsAmount = +data.bathroomsAmount;

  return credentials;
}

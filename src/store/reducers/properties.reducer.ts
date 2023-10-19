import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  PropertiesStateT,
  CreatePropertyArgsT,
} from "interface/store/properties.types";
import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";

import paths from "config/paths";
import FileControl from "utils/FileControl";
import { RouterHistory } from "config/config";
import { controlStatus as status } from "./helpers";

const initialState: PropertiesStateT = {
  status: status.default(),
};

const propertiesSlice = createSlice({
  name: "yariga_properties",
  initialState,
  reducers: {
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

    getAllProperties: {
      prepare: (payload) => {
        return { payload: {} };
      },

      reducer: (state) => {},
    },

    setAllProperties(state, { payload }: PayloadAction<{}>) {},
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice.reducer;

function prepareDataForDB(data: CreatePropertyFormT): CreatePropertyArgsT {
  const credentials: CreatePropertyArgsT = {
    title: data.title,
    description: data.description,
    propertyType: data.propertyType,
    price: data.price,
    images: data.images || [],
    images_to_delete: data.images_to_delete || [],
    location: {
      addressType: data.location.addresstype,
      displayName: data.location.display_name,
      name: data.location.name,
      lat: data.location.lat,
      lon: data.location.lon,
    },
  };

  if (Array.isArray(data.new_images) && data.new_images[0])
    credentials.new_images = FileControl.convertMultipleBase64StrToFile(
      data.new_images
    );

  return credentials;
}

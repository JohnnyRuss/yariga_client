import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import { PropertiesFilterStateT } from "interface/store/propertiesFilter.types";
import { PropertyFilterResponseT } from "interface/db/propertyFilter.types";

const initialState: PropertiesFilterStateT = {
  status: status.default(),

  filter: {
    sort: [],
    propertyStatus: [],
    city: [],
    country: [],
    features: [],
    propertyType: [],
    rooms: [],
    state: [],
  },
};

const propertiesFilterSlice = createSlice({
  name: "yariga-properties-filter",
  initialState,
  reducers: {
    getPropertyFilter(state) {
      state.status = status.loading();
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
        city: moderator(payload.cities),
        country: moderator(payload.countries),
        state: moderator(payload.states),
        features: payload.propertyFeatures,
        propertyType: payload.propertyTypes,
        rooms: payload.roomTypes,
        propertyStatus: payload.statuses,
      };

      state.status = status.success("SUCCESS");
    },

    setPropertiesFilterStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.status = setStatus({
        stage,
        message: message || "Failed to read properties filter",
      });
    },

    cleanUpFilter(state) {
      state.filter = initialState.filter;
    },
  },
});

export default propertiesFilterSlice.reducer;
export const propertiesFilterActions = propertiesFilterSlice.actions;

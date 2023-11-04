import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { PropertiesFilterStateT } from "interface/store/propertiesFilter.types";
import { PropertyFilterResponseT } from "interface/db/propertyFilter.types";

const initialState: PropertiesFilterStateT = {
  status: status.default(),

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
        cities: moderator(payload.cities),
        countries: moderator(payload.countries),
        states: moderator(payload.states),
        propertyFeatures: payload.propertyFeatures,
        propertyTypes: payload.propertyTypes,
        roomTypes: payload.roomTypes,
        statuses: payload.statuses,
      };

      state.status = status.success("SUCCESS");
    },

    cleanUpFilter(state) {
      state.filter = initialState.filter;
    },
  },
});

export default propertiesFilterSlice.reducer;
export const propertiesFilterActions = propertiesFilterSlice.actions;

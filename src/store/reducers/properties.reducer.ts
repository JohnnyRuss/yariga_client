import { createSlice } from "@reduxjs/toolkit";
import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";

const initialState = {};

const propertiesSlice = createSlice({
  name: "yariga_properties",
  initialState,
  reducers: {
    createProperty: {
      prepare: (payload: CreatePropertyFormT) => {
        console.log(payload);
        return { payload: {} };
      },

      reducer: () => {},
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice.reducer;

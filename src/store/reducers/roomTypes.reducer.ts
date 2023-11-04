import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { RoomTypeT } from "interface/db/properties.types";
import { RoomTypesStateT } from "interface/store/roomTypes.types";

const initialState: RoomTypesStateT = {
  status: status.default(),
  roomTypes: [],
};

const roomTypesSlice = createSlice({
  name: "yariga-room-types",
  initialState,
  reducers: {
    getAllRoomTypes(state) {
      state.status = status.loading();
    },

    setAllRoomTypes(state, { payload }: PayloadAction<RoomTypeT[]>) {
      state.roomTypes = payload;
      state.status = status.default();
    },

    cleanUpRoomTypes(state) {
      state.roomTypes = initialState.roomTypes;
    },
  },
});

export default roomTypesSlice.reducer;
export const roomTypesActions = roomTypesSlice.actions;

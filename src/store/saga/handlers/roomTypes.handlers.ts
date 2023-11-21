import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import { roomTypesActions } from "store/reducers/roomTypes.reducer";
import * as roomTypesAPI from "store/saga/api/roomTypes.api";

import { AxiosResponse } from "axios";
import { RoomTypeT } from "interface/db/properties.types";

export function* getAllRoomTypes() {
  try {
    const { data }: AxiosResponse<Array<RoomTypeT>> = yield call(
      roomTypesAPI.getAllRoomTypesQuery
    );

    yield put(roomTypesActions.setAllRoomTypes(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getAllRoomTypes",
      errorSetter: roomTypesActions.setRoomTypesStatus,
    });
  }
}

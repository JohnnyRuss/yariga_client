import { takeLatest } from "redux-saga/effects";

import { roomTypesActions } from "store/reducers/roomTypes.reducer";
import * as roomTypesHandlers from "store/saga/handlers/roomTypes.handlers";

export default function* roomTypeSaga() {
  yield takeLatest(
    roomTypesActions.getAllRoomTypes,
    roomTypesHandlers.getAllRoomTypes
  );
}

import { takeLatest } from "redux-saga/effects";

import { propertiesFilterActions } from "store/reducers/propertiesFilter.reducer";
import * as propertiesFilterHandlers from "store/saga/handlers/propertiesFilter.handlers";

export default function* propertiesFilterSaga() {
  yield takeLatest(
    propertiesFilterActions.getPropertyFilter,
    propertiesFilterHandlers.getPropertyFilter
  );
}

import { takeLatest } from "redux-saga/effects";

import { propertiesActions } from "store/reducers/properties.reducer";
import * as propertiesHandlers from "store/saga/handlers/properties.handlers";

export default function* propertiesSaga() {
  yield takeLatest(
    propertiesActions.createProperty,
    propertiesHandlers.createProperty
  );

  yield takeLatest(
    propertiesActions.getAllProperties,
    propertiesActions.getAllProperties
  );
}

import { takeLatest } from "redux-saga/effects";

import { propertiesActions } from "store/reducers/properties.reducer";
import * as propertiesHandlers from "store/saga/handlers/properties.handlers";

export default function* propertiesSaga() {
  yield takeLatest(
    propertiesActions.getPropertyFormSuggestions,
    propertiesHandlers.getPropertyFormSuggestions
  );

  yield takeLatest(
    propertiesActions.createProperty,
    propertiesHandlers.createProperty
  );

  yield takeLatest(
    propertiesActions.getPropertyFilter,
    propertiesHandlers.getPropertyFilter
  );

  yield takeLatest(
    propertiesActions.getAllProperties,
    propertiesHandlers.getAllProperties
  );

  yield takeLatest(
    propertiesActions.getAllRoomTypes,
    propertiesHandlers.getAllRoomTypes
  );

  yield takeLatest(
    propertiesActions.getProperty,
    propertiesHandlers.getProperty
  );
}

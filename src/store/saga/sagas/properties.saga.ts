import { takeLatest } from "redux-saga/effects";

import { propertiesActions } from "store/reducers/properties.reducer";
import * as propertiesHandlers from "store/saga/handlers/properties.handlers";

export default function* propertiesSaga() {
  yield takeLatest(
    propertiesActions.getAllProperties,
    propertiesHandlers.getAllProperties
  );

  yield takeLatest(
    propertiesActions.getProperty,
    propertiesHandlers.getProperty
  );

  yield takeLatest(
    propertiesActions.getUserProperties,
    propertiesHandlers.getUserProperties
  );

  yield takeLatest(
    propertiesActions.getAgentProperties,
    propertiesHandlers.getAgentProperties
  );

  yield takeLatest(
    propertiesActions.getRelatedProperties,
    propertiesHandlers.getRelatedProperties
  );
}

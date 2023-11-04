import { takeLatest } from "redux-saga/effects";

import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";
import * as createPropertyHandlers from "store/saga/handlers/createProperty.handlers";

export default function* createPropertySaga() {
  yield takeLatest(
    createPropertyFormActions.getPropertyFormSuggestions,
    createPropertyHandlers.getPropertyFormSuggestions
  );

  yield takeLatest(
    createPropertyFormActions.createProperty,
    createPropertyHandlers.createProperty
  );
}

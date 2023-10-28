import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./auth.reducer";
import propertiesReducer from "./properties.reducer";
import agentReducer from "./agent.reducer";

const persistedAuthReducer = persistReducer(
  {
    storage,
    key: "YARIGA_USER",
    whitelist: ["user"],
  },
  authReducer
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  properties: propertiesReducer,
  agent: agentReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./auth.reducer";
import agentReducer from "./agent.reducer";
import userReducer from "./user.reducer";
import propertiesReducer from "./properties.reducer";

const persistedUserReducer = persistReducer(
  {
    storage,
    key: "YARIGA_USER",
    whitelist: ["user"],
  },
  userReducer
);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  agent: agentReducer,
  auth: authReducer,
  properties: propertiesReducer,
});

export default rootReducer;

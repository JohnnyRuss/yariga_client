import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./auth.reducer";
import agentReducer from "./agent.reducer";
import usersReducer from "./users.reducer";
import propertiesReducer from "./properties.reducer";

const persistedAuthReducer = persistReducer(
  {
    storage,
    key: "YARIGA_USER",
    whitelist: ["user"],
  },
  authReducer
);

const rootReducer = combineReducers({
  user: usersReducer,
  agent: agentReducer,
  auth: persistedAuthReducer,
  properties: propertiesReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./auth.reducer";
import agentReducer from "./agent.reducer";
import userReducer from "./user.reducer";
import propertiesReducer from "./properties.reducer";
import propertiesFilterReducer from "./propertiesFilter.reducer";
import createPropertyFormReducer from "./createPropertyForm.reducer";
import roomTypesReducer from "./roomTypes.reducer";
import reviewReducer from "./review.reducer";
import chatReducer from "./chat.reducer";

const persistedUserReducer = persistReducer(
  {
    storage,
    key: "YARIGA_USER",
    whitelist: ["user"],
  },
  userReducer
);

const persistedChatReducer = persistReducer(
  {
    storage,
    key: "YARIGA_CHAT",
    whitelist: ["unreadConversations"],
  },
  chatReducer
);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  agent: agentReducer,
  auth: authReducer,
  properties: propertiesReducer,
  propertiesFilter: propertiesFilterReducer,
  createPropertyForm: createPropertyFormReducer,
  roomTypes: roomTypesReducer,
  reviews: reviewReducer,
  chat: persistedChatReducer,
});

export default rootReducer;

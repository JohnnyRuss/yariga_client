import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/root";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type DispatchT = typeof store.dispatch;
export type RootStateT = ReturnType<typeof store.getState>;

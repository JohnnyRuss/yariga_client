import { configureStore, Middleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import userConnection from "./middlewares/userConnection";

import rootReducer from "./reducers/root";
import initSagas from "./saga/init.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares: Array<Middleware> = [sagaMiddleware, userConnection];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

initSagas(sagaMiddleware);

export default store;
export const persistore = persistStore(store);

export type DispatchT = typeof store.dispatch;
export type RootStateT = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import { profilesSlice } from "./profilesSlice";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: profilesSlice.reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

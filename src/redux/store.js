import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { profilesSlice } from "./profilesSlice";
import { modalSlice } from "./modalSlice";

import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { profiles: profilesSlice.reducer, modal: modalSlice.reducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

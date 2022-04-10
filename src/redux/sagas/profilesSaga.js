import { call, takeEvery, put } from "redux-saga/effects";
import {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
} from "../profilesSlice";
import { closeModal } from "../modalSlice";
const axios = require("axios");

export function* addNewProfileSaga({ payload: { values, setFieldError } }) {
  try {
    const request = yield call(
      axios.post,
      "http://localhost:3001/profiles",
      values
    );

    const receivedData = request.data.data;

    yield put(addProfileSuccess(receivedData));
    yield put(closeModal());
  } catch (error) {
    yield put(addProfileFailure(error?.response?.data?.errors));

    if (error?.response?.data?.errors) {
      Object.entries(error.response.data.errors).forEach(([key, value]) => {
        setFieldError(`${key}`, value);
      });
    }
  }
}

function* profilesWatcher() {
  yield takeEvery(addProfileFetch, addNewProfileSaga);
}

export { profilesWatcher };

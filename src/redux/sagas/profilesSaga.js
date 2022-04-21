import { call, takeEvery, put } from "redux-saga/effects";
import {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
  deleteProfileFetch,
  deleteProfileSuccess,
  getProfilesFetch,
  getProfilesSuccess,
} from "../profilesSlice";
import { closeModal } from "../modalSlice";
const axios = require("axios");

export function* addNewProfileSaga({ payload: { values, setFieldError } }) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:3001/profiles",
      values
    );

    const receivedData = response.data.data;

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

export function* getProfilesSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:3001/profiles");
    const receivedData = response.data.data;

    yield put(getProfilesSuccess(receivedData));
  } catch (error) {
    console.log("error: ", error);
  }
}

export function* deleteProfileSaga({ payload: id }) {
  try {
    const response = yield call(
      axios.delete,
      `http://localhost:3001/profiles/${id}`
    );

    yield put(deleteProfileSuccess());
    yield put(getProfilesFetch());
  } catch (error) {
    console.log("error: ", error);
  }
}

function* profilesWatcher() {
  yield takeEvery(addProfileFetch, addNewProfileSaga);
  yield takeEvery(deleteProfileFetch, deleteProfileSaga);
  yield takeEvery(getProfilesFetch, getProfilesSaga);
}

export { profilesWatcher };

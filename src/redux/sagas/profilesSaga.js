import { call, takeEvery, put } from "redux-saga/effects";
import {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
  deleteProfileFetch,
  deleteProfileSuccess,
  getProfilesFetch,
  getProfilesSuccess,
  editProfileFetch,
  editProfileSuccess,
  editProfileFailure,
} from "../profilesSlice";
import { closeModal, closeEditModal } from "../modalSlice";
import { setFieldErrorsService } from "../../services/setFieldErrorsService";
const axios = require("axios");

const PROFILES_URL = "http://localhost:3001/profiles";

export function* addNewProfileSaga({ payload: { values, setFieldError } }) {
  try {
    const response = yield call(axios.post, PROFILES_URL, values);

    const receivedData = response.data.data;

    yield put(addProfileSuccess(receivedData));
    yield put(closeModal());
  } catch (error) {
    yield put(addProfileFailure(error?.response?.data?.errors));

    setFieldErrorsService(error, setFieldError);
  }
}

export function* getProfilesSaga() {
  try {
    const response = yield call(axios.get, PROFILES_URL);
    const receivedData = response.data.data;

    yield put(getProfilesSuccess(receivedData));
  } catch (error) {
    console.log("error: ", error);
  }
}

export function* editProfileSaga({ payload: { values, setFieldError, id } }) {
  try {
    const response = yield call(axios.put, PROFILES_URL + `/${id}`, {
      ...values,
      id,
    });

    yield put(editProfileSuccess());
    yield put(closeEditModal());
    yield put(getProfilesFetch());
  } catch (error) {
    yield put(editProfileFailure(error?.response?.data?.errors));

    setFieldErrorsService(error, setFieldError);
  }
}

export function* deleteProfileSaga({ payload: id }) {
  try {
    const response = yield call(axios.delete, PROFILES_URL + `/${id}`);

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
  yield takeEvery(editProfileFetch, editProfileSaga);
}

export { profilesWatcher };

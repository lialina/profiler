import { call, takeEvery, put } from "redux-saga/effects";
import {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
} from "../profilesSlice";
const axios = require("axios");

export function* addNewProfile(values) {
  try {
    const request = yield call(
      axios.post,
      "http://localhost:3001/profiles",
      values.payload
    );

    const receivedData = request.data.data;

    yield put(addProfileSuccess(receivedData));
  } catch (error) {
    // console.log(error.response.data.errors);
    yield put(addProfileFailure(error.response.data.errors));
  }
}

function* profilesSaga() {
  yield takeEvery(addProfileFetch, addNewProfile);
}

export { profilesSaga };

import { spawn, all } from "redux-saga/effects";
import { profilesSaga } from "./profilesSaga";
export default function* rootSaga() {
  const sagas = [profilesSaga];

  yield all(sagas.map((s) => spawn(s)));
}

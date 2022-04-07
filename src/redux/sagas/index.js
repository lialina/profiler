import { spawn, all } from "redux-saga/effects";
import { profilesWatcher } from "./profilesSaga";
export default function* rootSaga() {
  const sagas = [profilesWatcher];

  yield all(sagas.map((s) => spawn(s)));
}

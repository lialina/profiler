import { spawn, all } from "redux-saga/effects";
import { profilesSaga } from "./profilesSaga";
export default function* rootSaga() {
  const sagas = [profilesSaga];

  yield all(sagas.map((s) => spawn(s)));

  // OR this way with try and catch
  // const retrySagas = yield sagas.map((saga) => {
  //   return spawn(function* () {
  //     while (true) {
  //       try {
  //         yield call(saga);
  //         break;
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   });
  // });

  // yield all(retrySagas);
}

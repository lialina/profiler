import rootSaga from "./index";
import { all, spawn } from "redux-saga/effects";
import { profilesWatcher } from "../sagas/profilesSaga";

describe("rootSaga", () => {
  it("should spawn all sagas", () => {
    const genObject = rootSaga();
    const sagas = [profilesWatcher];
    expect(genObject.next().value).toEqual(all(sagas.map((s) => spawn(s))));
  });
});

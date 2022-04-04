import rootSaga from "./index";
import { all, spawn } from "redux-saga/effects";
import { profilesSaga } from "../sagas/profilesSaga";

describe("rootSaga", () => {
  it("should spawn all sagas", () => {
    const genObject = rootSaga();
    const sagas = [profilesSaga];
    expect(genObject.next().value).toEqual(all(sagas.map((s) => spawn(s))));
  });
});

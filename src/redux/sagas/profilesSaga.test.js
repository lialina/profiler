import { takeEvery } from "redux-saga/effects";
import { addProfileFetch } from "../profilesSlice";
import { addNewProfile, profilesSaga } from "../sagas/profilesSaga";

describe("profilesSaga", () => {
  const genObject = profilesSaga();

  it("should wait for every addProfileFetch action and call addNewProfile", () => {
    expect(genObject.next().value).toEqual(
      takeEvery(addProfileFetch, addNewProfile)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

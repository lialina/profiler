import { testSaga } from "redux-saga-test-plan";
// import { call, put, take } from "redux-saga/effects";
import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
} from "../profilesSlice";

import { toggleModal } from "../modalSlice";
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

  it("works with unit tests", () => {
    const dummyProfile = {
      firstName: "Anna",
      lastName: "Jons",
      phone: "+80302525789",
      email: "anna.jons@gmail.com",
      bio: "Developer",
    };
    const mockReceivedData = { ...dummyProfile, id: "1" };

    const args = {
      payload: { values: dummyProfile, setFieldError: jest.fn() },
    };

    testSaga(addNewProfile, args)
      .next()
      .call(axios.post, "http://localhost:3001/profiles", dummyProfile)

      .next()
      .put(addProfileSuccess(mockReceivedData))

      .next()
      .put(toggleModal())

      .next()
      .isDone();
  });

  // it("should call axios post and dispatch success action", async () => {
  //   const dummyProfile = {
  //     firstName: "Anna",
  //     lastName: "Jons",
  //     phone: "+80302525789",
  //     email: "anna.jons@gmail.com",
  //     bio: "Developer",
  //   };
  //   const dummySetFieldError = jest.fn();
  //   const postProfiles = jest
  //     .spyOn(axios, "post")
  //     .mockImplementation(() => Promise.resolve(dummyProfile));

  //   const mockPayload = { payload: dummyProfile };
  //   const dispatched = [];
  //   const result = await runSaga(
  //     {
  //       dispatch: (action) => dispatched.push(action),
  //     },
  //     addNewProfile,
  //     mockPayload
  //   );

  //   expect(postProfiles).toHaveBeenCalledTimes(1);
  //   expect(dispatched).toEqual([addProfileSuccess(dummyProfile)]);
  //   postProfiles.mockClear();
  // });
});

// it("should call api and dispatch error action", async () => {
//   const postProfiles = jest
//     .spyOn(axios, "post")
//     .mockImplementation(() => Promise.reject());
//   const dispatched = [];
//   const result = await runSaga(
//     {
//       dispatch: (action) => dispatched.push(action),
//     },
//     addNewProfile
//   );

//   expect(postProfiles).toHaveBeenCalledTimes(1);
//   expect(dispatched).toEqual([addProfileFailure()]);
//   postProfiles.mockClear();
// });

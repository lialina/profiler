import { testSaga } from "redux-saga-test-plan";
import axios from "axios";
import {
  addProfileSuccess,
  addProfileFailure,
  getProfilesSuccess,
  editProfileSuccess,
  getProfilesFetch,
  editProfileFailure,
  deleteProfileSuccess,
} from "../profilesSlice";
import { closeModal, closeEditModal } from "../modalSlice";
import {
  PROFILES_URL,
  addNewProfileSaga,
  getProfilesSaga,
  editProfileSaga,
  deleteProfileSaga,
} from "../sagas/profilesSaga";

describe("ProfilesSaga", () => {
  describe("addNewProfileSaga", () => {
    const testProfile = {
      firstName: "Anna",
      lastName: "Jons",
      phone: "+80302525789",
      email: "anna.jons@gmail.com",
      bio: "Developer",
    };

    const args = {
      payload: { values: testProfile, setFieldError: jest.fn() },
    };

    it("puts addProfileSuccess and closeModal if resolved", () => {
      const mockReceivedData = { ...testProfile, id: "1" };

      let saga = testSaga(addNewProfileSaga, args);
      saga
        .next()
        .call(axios.post, PROFILES_URL, testProfile)

        .next({ data: { data: mockReceivedData } })
        .put(addProfileSuccess(mockReceivedData))

        .next()
        .put(closeModal())

        .next()
        .isDone();
    });

    it("should catch error and puts addProfileFailure", () => {
      const mockError = {
        response: { data: { errors: { firstName: "Some error" } } },
      };
      let saga = testSaga(addNewProfileSaga, args);
      saga
        .next()
        .throw(mockError)
        .put(addProfileFailure(mockError.response.data.errors))
        .next(true)
        .isDone()

        .back(2)
        .next(false)
        .next()
        .isDone();
    });
  });

  describe("getProfilesSaga", () => {
    it("puts getProfilesSuccess if resolved", () => {
      const mockReceivedData = [
        {
          firstName: "Anna",
          lastName: "Jons",
          phone: "+80302525789",
          email: "anna.jons@gmail.com",
          bio: "Developer",
          id: "1",
        },
      ];

      let saga = testSaga(getProfilesSaga);
      saga
        .next()
        .call(axios.get, PROFILES_URL)

        .next({ data: { data: mockReceivedData } })
        .put(getProfilesSuccess(mockReceivedData))

        .next()
        .isDone();
    });

    it("should catch error", () => {
      const mockError = "Some error";
      let saga = testSaga(getProfilesSaga);
      saga
        .next()
        .throw(mockError)

        .next()
        .isDone();
    });
  });

  describe("editProfileSaga", () => {
    const testProfile = {
      firstName: "Anna",
      lastName: "Jons",
      phone: "+80302525789",
      email: "anna.jons@gmail.com",
      bio: "Developer",
      id: "1",
    };

    const args = {
      payload: { values: testProfile, setFieldError: jest.fn(), id: "1" },
    };

    it("puts editProfileSuccess, closeEditModal and getProfilesFetch if resolved", () => {
      let saga = testSaga(editProfileSaga, args);
      saga
        .next()
        .call(axios.put, PROFILES_URL + `/${args.payload.id}`, {
          ...args.payload.values,
          id: args.payload.id,
        })

        .next()
        .put(editProfileSuccess())

        .next()
        .put(closeEditModal())

        .next()
        .put(getProfilesFetch())

        .next()
        .isDone();
    });

    it("should catch error and puts editProfileFailure", () => {
      const mockError = {
        response: { data: { errors: { firstName: "Some error" } } },
      };
      let saga = testSaga(editProfileSaga, args);
      saga
        .next()
        .throw(mockError)
        .put(editProfileFailure(mockError.response.data.errors))
        .next(true)
        .isDone()

        .back(2)
        .next(false)
        .next();
    });
  });

  describe("deleteProfileSaga", () => {
    const id = "1";
    const args = {
      payload: id,
    };

    it("puts deleteProfileSuccess and getProfilesFetch if resolved", () => {
      let saga = testSaga(deleteProfileSaga, args);
      saga
        .next()
        .call(axios.delete, PROFILES_URL + `/${id}`)

        .next()
        .put(deleteProfileSuccess())

        .next()
        .put(getProfilesFetch())

        .next()
        .isDone();
    });

    it("should catch error", () => {
      const mockError = "Some error";
      let saga = testSaga(deleteProfileSaga, args);
      saga
        .next()
        .throw(mockError)

        .next()
        .isDone();
    });
  });
});

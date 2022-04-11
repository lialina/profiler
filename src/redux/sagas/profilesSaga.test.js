import { testSaga } from "redux-saga-test-plan";
import axios from "axios";
import { addProfileSuccess, addProfileFailure } from "../profilesSlice";
import { closeModal } from "../modalSlice";
import { addNewProfileSaga } from "../sagas/profilesSaga";

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

  it("puts addProfileSuccess if resolved", () => {
    const mockReceivedData = { ...testProfile, id: "1" };

    let saga = testSaga(addNewProfileSaga, args);
    saga
      .next()
      .call(axios.post, "http://localhost:3001/profiles", testProfile)

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

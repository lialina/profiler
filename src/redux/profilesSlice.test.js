import {
  profilesSlice,
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
} from "./profilesSlice";

describe("profilesSlice", () => {
  it("should return the initial state", () => {
    expect(profilesSlice.reducer(undefined, {})).toEqual({
      profiles: [],
      errors: null,
      isLoading: false,
    });
  });

  it("should handle a addProfileFetch action", () => {
    const previousState = {
      profiles: [],
      errors: { error: "Some error" },
      isLoading: false,
    };

    expect(profilesSlice.reducer(previousState, addProfileFetch())).toEqual({
      profiles: [],
      errors: null,
      isLoading: true,
    });
  });

  it("should handle a addProfileSuccess action", () => {
    const previousState = {
      profiles: [],
      errors: null,
      isLoading: true,
    };

    const mockProfile = {
      firstName: "Anna",
      lastName: "Jons",
      phone: "+80302525789",
      email: "anna.jons@gmail.com",
      bio: "Developer",
    };

    expect(
      profilesSlice.reducer(previousState, addProfileSuccess(mockProfile))
    ).toEqual({
      profiles: [
        {
          firstName: "Anna",
          lastName: "Jons",
          phone: "+80302525789",
          email: "anna.jons@gmail.com",
          bio: "Developer",
        },
      ],
      errors: null,
      isLoading: false,
    });
  });

  it("should handle a addProfileFailure action", () => {
    const previousState = {
      profiles: [],
      errors: null,
      isLoading: true,
    };

    const mockError = {
      firstName: "Must contain no more then 20 characters",
    };

    expect(
      profilesSlice.reducer(previousState, addProfileFailure(mockError))
    ).toEqual({
      profiles: [],
      errors: {
        firstName: "Must contain no more then 20 characters",
      },
      isLoading: false,
    });
  });
});

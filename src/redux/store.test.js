import { store } from "./store";

describe("Store", () => {
  it("should initially set initial state object from profilesSlice", () => {
    const mockProfilesInitialState = {
      profiles: [],
      errors: null,
      isLoading: false,
    };
    const state = store.getState().profiles;
    expect(state).toEqual(mockProfilesInitialState);
  });

  it("should initially set initial state object with modalSlice", () => {
    const mockModalInitialState = {
      isModalVisible: false,
    };
    const state = store.getState().modal;
    expect(state).toEqual(mockModalInitialState);
  });
});

import { store } from "./store";
import {
  profilesSelector,
  errorsSelector,
  isLoadingSelector,
  isModalVisibleSelector,
  isEditModalVisibleSelector,
} from "./selectors";

describe("Selectors", () => {
  it("should return profiles from profilesSlice", () => {
    const state = store.getState();
    const profiles = store.getState().profiles.profiles;
    expect(profiles).toEqual(profilesSelector(state));
  });

  it("should return errors from profilesSlice", () => {
    const state = store.getState();
    const errors = store.getState().profiles.errors;
    expect(errors).toEqual(errorsSelector(state));
  });

  it("should return isLoading from profilesSlice", () => {
    const state = store.getState();
    const isLoading = store.getState().profiles.isLoading;
    expect(isLoading).toEqual(isLoadingSelector(state));
  });

  it("should return isModalVisible from profilesSlice", () => {
    const state = store.getState();
    const isModalVisible = store.getState().modal.isModalVisible;
    expect(isModalVisible).toEqual(isModalVisibleSelector(state));
  });

  it("should return isEditModalVisible from profilesSlice", () => {
    const state = store.getState();
    const isEditModalVisible = store.getState().modal.isEditModalVisible;
    expect(isEditModalVisible).toEqual(isEditModalVisibleSelector(state));
  });
});

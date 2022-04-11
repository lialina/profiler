import { modalSlice, openModal, closeModal } from "./modalSlice";

describe("modalSlice", () => {
  it("should return the initial state", () => {
    expect(modalSlice.reducer(undefined, {})).toEqual({
      isModalVisible: false,
    });
  });

  it("should handle a openModal action", () => {
    const previousState = { isModalVisible: false };
    expect(modalSlice.reducer(previousState, openModal(true))).toEqual({
      isModalVisible: true,
    });
  });

  it("should handle a closeModal action", () => {
    const previousState = { isModalVisible: true };
    expect(modalSlice.reducer(previousState, closeModal(false))).toEqual({
      isModalVisible: false,
    });
  });
});

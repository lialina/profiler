import { modalSlice, toggleModal } from "./modalSlice";

describe("modalSlice", () => {
  it("should return the initial state", () => {
    expect(modalSlice.reducer(undefined, {})).toEqual({
      isModalVisible: false,
    });
  });

  it("should handle a toggleModal action", () => {
    const previousState = { isModalVisible: false };
    expect(modalSlice.reducer(previousState, toggleModal(true))).toEqual({
      isModalVisible: true,
    });
  });
});

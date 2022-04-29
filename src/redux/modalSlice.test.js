import {
  modalSlice,
  openModal,
  closeModal,
  openEditModal,
  closeEditModal,
} from "./modalSlice";

describe("modalSlice", () => {
  it("should return the initial state", () => {
    expect(modalSlice.reducer(undefined, {})).toEqual({
      isModalVisible: false,
      isEditModalVisible: false,
    });
  });

  it("should handle a openModal action", () => {
    const previousState = { isModalVisible: false, isEditModalVisible: false };
    expect(modalSlice.reducer(previousState, openModal(true))).toEqual({
      isModalVisible: true,
      isEditModalVisible: false,
    });
  });

  it("should handle a closeModal action", () => {
    const previousState = { isModalVisible: true, isEditModalVisible: false };
    expect(modalSlice.reducer(previousState, closeModal(false))).toEqual({
      isModalVisible: false,
      isEditModalVisible: false,
    });
  });

  it("should handle a openEditModal action", () => {
    const previousState = { isEditModalVisible: false };
    expect(modalSlice.reducer(previousState, openEditModal(true))).toEqual({
      isEditModalVisible: true,
    });
  });

  it("should handle a closeEditModal action", () => {
    const previousState = { isEditModalVisible: true };
    expect(modalSlice.reducer(previousState, closeEditModal(false))).toEqual({
      isEditModalVisible: false,
    });
  });
});

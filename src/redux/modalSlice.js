import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalVisible: false,
    isEditModalVisible: false,
  },
  reducers: {
    openModal: (state) => {
      state.isModalVisible = true;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
    },
    openEditModal: (state) => {
      state.isEditModalVisible = true;
    },
    closeEditModal: (state) => {
      state.isEditModalVisible = false;
    },
  },
});

export const { openModal, closeModal, openEditModal, closeEditModal } =
  modalSlice.actions;

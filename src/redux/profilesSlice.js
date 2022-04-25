import { createSlice } from "@reduxjs/toolkit";

export const profilesSlice = createSlice({
  name: "profiles",
  initialState: {
    profiles: [],
    errors: null,
    isLoading: false,
  },
  reducers: {
    addProfileFetch: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    addProfileSuccess: (state, action) => {
      state.profiles = [...state.profiles, action.payload];
      state.isLoading = false;
    },
    addProfileFailure: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    deleteProfileFetch: (state) => {
      console.log("deleteProfileFetch is working");
    },
    deleteProfileSuccess: (state) => {
      console.log("deleteProfileSuccess is working");
    },
    getProfilesFetch: (state) => {
      console.log("getProfilesFetch is working");
    },
    getProfilesSuccess: (state, { payload }) => {
      state.profiles = [...payload];
    },
    editProfileFetch: (state) => {
      console.log("editProfileFetch is working");
      state.isLoading = true;
      state.errors = null;
    },
    editProfileSuccess: (state) => {
      console.log("editProfileSuccess is working");
      state.isLoading = false;
    },
    editProfileFailure: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  addProfileFetch,
  addProfileSuccess,
  addProfileFailure,
  deleteProfileFetch,
  deleteProfileSuccess,
  getProfilesFetch,
  getProfilesSuccess,
  editProfileFetch,
  editProfileSuccess,
  editProfileFailure,
} = profilesSlice.actions;

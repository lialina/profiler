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
  },
});

export const { addProfileFetch, addProfileSuccess, addProfileFailure } =
  profilesSlice.actions;

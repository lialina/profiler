import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    addProfile(state, action) {
      console.log("action", action);
      return { ...state, profiles: [...state.profiles, action.payload] };
    },
  },
});

export const store = configureStore({
  reducer: profilesSlice.reducer,
});

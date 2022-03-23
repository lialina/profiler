import { types } from "./types";

export const addProfile = (data) => ({
  type: types.ADD_PROFILE,
  payload: data,
});

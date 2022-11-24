import {
  SET_USER_DATA,
  DELETE_USER_DATA,
  UPDATE_USER_DATA,
} from "../action-types";

export const addUserData = (data) => ({ type: SET_USER_DATA, payload: data });

export const deleteUserData = (data) => ({
  type: DELETE_USER_DATA,
  payload: data,
});

export const updateUserData = (data) => ({
  type: UPDATE_USER_DATA,
  payload: data,
});


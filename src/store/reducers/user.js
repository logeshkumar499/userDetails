import { DELETE_USER_DATA, SET_USER_DATA, UPDATE_USER_DATA } from "../action-types";

const initialState = {
  userData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      state = {
        ...state,
        userData: [...state.userData, action.payload],
      };
      break;
    }
    case DELETE_USER_DATA: {
      state = {
        ...state,
        userData: state.userData.filter((obj) => obj.id !== action.payload),
      };
      break;
    }
    case UPDATE_USER_DATA: {
      state = {
        ...state,
        userData: state.userData.map((value) =>
          value.id === action.payload.id
            ? action.payload
            : value
        ),
      };
      break;
    }
    default:
      break;
  }

  return state;
};

export default userReducer;
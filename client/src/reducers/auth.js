import { AUTH, LOGOUT } from "../constants/actionTypes";

const initialState = { authData: null };

// Reducer function for user authentication
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      localStorage.setItem("Profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    }
    case LOGOUT: {
      localStorage.clear();
      return { ...state, authData: null };
    }

    default:
      return state;
  }
};

export default authReducer;

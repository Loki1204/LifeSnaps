import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";

// Action creator for signin
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

// Action creator for signup
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

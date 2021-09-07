import { combineReducers } from "redux";
import posts from "./posts";
import authReducer from "./auth";

// Combining the multiple reducers
export const reducers = combineReducers({ posts, authReducer });

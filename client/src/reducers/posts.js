import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const initialState = { posts: [] };

// Reducer function for user activity w.r.t. posts
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        posts: action.payload,
      };
    }
    case CREATE: {
      return { ...state, posts: action.payload };
    }
    case UPDATE: {
      return {
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    }
    case DELETE: {
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    }
    default:
      return state;
  }
};
export default reducer;

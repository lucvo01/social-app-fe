import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentReducer from "../features/comment/commentSlice";
import friendReducer from "../features/friend/friendSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";

const rootReducer = combineReducers({
  comment: commentReducer,
  friend: friendReducer,
  post: postReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

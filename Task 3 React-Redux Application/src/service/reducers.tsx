import { combineReducers } from "redux";
import postsSlice from "./store/posts/posts.slice";

export const reducers = combineReducers({
  posts: postsSlice.reducer
})  

export type RootStateType = ReturnType< typeof reducers >
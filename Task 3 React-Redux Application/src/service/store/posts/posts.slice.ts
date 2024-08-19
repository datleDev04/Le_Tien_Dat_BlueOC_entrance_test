import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addNewPost, fetchPosts } from './posts.thunk'
import { Posts as Post } from './posts.model'

interface PostsState {
  posts: Post[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded'
        state.posts = action.payload
        state.error = null
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      // Xử lý addNewPost
      .addCase(addNewPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addNewPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.status = 'succeeded'
        state.posts.push(action.payload)
        state.error = null
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  }
})

export default postsSlice

export const selectAllPosts = (state: { posts: PostsState }) => state.posts.posts
export const selectPostsStatus = (state: { posts: PostsState }) => state.posts.status
export const selectPostsError = (state: { posts: PostsState }) => state.posts.error
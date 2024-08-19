import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Posts as Post } from './posts.model'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Post[]>(API_URL)
      return response.data
    } catch (error) {
      return rejectWithValue(`Failed to get all post :${error}`)
    }
  }
)

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost: Omit<Post, 'id'>, { rejectWithValue }) => {
    try {
      const response = await axios.post<Post>(API_URL, initialPost)
      return response.data
    } catch (error) {
      return rejectWithValue(`Failed to add new post :${error}`)
    }
  }
)

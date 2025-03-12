import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL (Adjust it to match your backend URL)
const API_URL = 'http://localhost:3000/tasks';

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Async thunk to add a task
export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
});

// Redux slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

export default taskSlice.reducer;

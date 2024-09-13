import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import axios from 'axios';

interface InitialState {}

const initialState: InitialState = {};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;

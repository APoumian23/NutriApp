import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//import axios from 'axios';

interface InitialState {
  resultado: string[];
}

const initialState: InitialState = {
  resultado: [],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    cleanCalculator: state => {
      state.resultado = [];
    },
  },
  extraReducers: builder => {},
});

export const {cleanCalculator} = mainSlice.actions;
export default mainSlice.reducer;

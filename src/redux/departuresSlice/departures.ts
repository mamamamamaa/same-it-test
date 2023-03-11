import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  error: string | null;
  isLoading: boolean;
  data: any[];
}

const initialState: IInitialState = {
  data: [],
  error: null,
  isLoading: false,
};

const departuresSlice = createSlice({
  name: "departures",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const departuresReducer = departuresSlice.reducer;

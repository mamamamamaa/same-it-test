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

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const trackingReducer = trackingSlice.reducer;

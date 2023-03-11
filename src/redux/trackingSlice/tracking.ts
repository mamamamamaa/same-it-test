import { createSlice } from "@reduxjs/toolkit";
import { getTrackingData, ResponseTracking } from "./operations";

interface IInitialState {
  error: string | null;
  isLoading: boolean;
  data: ResponseTracking | null;
  savedTracking: ResponseTracking[] | [];
}

const initialState: IInitialState = {
  savedTracking: [],
  data: null,
  error: null,
  isLoading: false,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getTrackingData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getTrackingData.fulfilled, (state, action) => {
        state.isLoading = true;
        if (action.payload) {
          state.data = action.payload;
          state.savedTracking = [...state.savedTracking, action.payload];
        }
      })
      .addCase(getTrackingData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const trackingReducer = trackingSlice.reducer;

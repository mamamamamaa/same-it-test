import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrackingData, ResponseTracking } from "./operations";
import { addToSaved } from "../../helpers/addToSaved";

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
  reducers: {
    removeFromSaved(state, action: PayloadAction<string>) {
      const TTN = action.payload;
      state.savedTracking = state.savedTracking.filter(
        ({ Number }) => Number !== TTN
      );
    },
    removeAllSaved(state) {
      state.savedTracking = [];
    },
  },
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
          state.savedTracking = addToSaved(state.savedTracking, action.payload);
        }
      })
      .addCase(getTrackingData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const trackingReducer = trackingSlice.reducer;
export const { removeFromSaved, removeAllSaved } = trackingSlice.actions;

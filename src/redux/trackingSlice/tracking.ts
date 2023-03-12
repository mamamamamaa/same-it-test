import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrackingData, ResponseTracking } from "./operations";
import { addToSaved } from "../../helpers/addToSaved";

export interface Saved {
  Number: string;
}
interface IInitialState {
  error: string | null;
  isLoading: boolean;
  data: ResponseTracking | null;
  savedTracking: Saved[] | [];
  currentTrackNumber: string | "";
}

const initialState: IInitialState = {
  savedTracking: [
    { Number: "20450676703181" },
    { Number: "20450676702181" },
    { Number: "20455676703181" },
    { Number: "20450677703181" },
    { Number: "23450676703181" },
    { Number: "23450676703183" },
    { Number: "23450676703112" },
    { Number: "23450676703119" },
    { Number: "23450674703112" },
  ],
  data: null,
  error: null,
  isLoading: false,
  currentTrackNumber: "",
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
          state.currentTrackNumber = action.payload.Number;
        }
      })
      .addCase(getTrackingData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const trackingReducer = trackingSlice.reducer;
export const { removeFromSaved, removeAllSaved } = trackingSlice.actions;

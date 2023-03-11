import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDepartures, ResponseDeparture } from "./operations";

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
  extraReducers: (builder) =>
    builder
      .addCase(getDepartures.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getDepartures.fulfilled,
        (state, action: PayloadAction<ResponseDeparture[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getDepartures.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const departuresReducer = departuresSlice.reducer;

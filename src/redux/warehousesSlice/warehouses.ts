import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWarehouses, ResponseDeparture } from "./operations";

interface IInitialState {
  error: string | null;
  isLoading: boolean;
  data: ResponseDeparture[] | [];
}

const initialState: IInitialState = {
  data: [],
  error: null,
  isLoading: false,
};

const departuresSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getWarehouses.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getWarehouses.fulfilled,
        (state, action: PayloadAction<ResponseDeparture[]>) => {
          state.isLoading = false;
          state.data = action.payload.map(({ Description, Phone }) => ({
            Description,
            Phone,
          }));
        }
      )
      .addCase(getWarehouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const departuresReducer = departuresSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  Request,
  ResponseWarehouse,
  WarehouseInitialState,
} from "../../utils/interfaces";
import { getWarehouses } from "./operations";

const initialState: WarehouseInitialState = {
  data: [],
  error: null,
  isLoading: false,
  currentRequest: {
    city: "",
    query: "",
  },
};

const departuresSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setCurrentRequest(state, action: PayloadAction<Request>) {
      state.currentRequest = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getWarehouses.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getWarehouses.fulfilled,
        (state, action: PayloadAction<ResponseWarehouse[]>) => {
          state.isLoading = false;
          state.data = action.payload.map(({ Description, Number }) => ({
            Description,
            Number,
          }));
        }
      )
      .addCase(getWarehouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      }),
});

export const departuresReducer = departuresSlice.reducer;
export const { setCurrentRequest } = departuresSlice.actions;

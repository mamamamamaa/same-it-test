import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Properties, ResponseWarehouse } from "../../utils/interfaces";

const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;

export const getWarehouses = createAsyncThunk<
  ResponseWarehouse[],
  Properties,
  { rejectValue: string }
>("warehouses/getWarehouses", async ({ city, query = "" }, thunkAPI) => {
  const fetchParams = {
    apiKey: VITE_API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: city,
      Page: 1,
      Limit: 100,
      FindByString: query,
    },
  };

  try {
    const { data: res } = await axios.post(VITE_BASE_URL, fetchParams);

    if (!res.success) {
      return thunkAPI.rejectWithValue(res.errors[0]);
    }

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;

interface Properties {
  city: string;
  search?: string;
}

export interface ResponseDeparture {
  Description: string;
}

export const getDepartures = createAsyncThunk<
  ResponseDeparture[],
  Properties,
  { rejectValue: string }
>("departures/getAll", async ({ city, search = "" }, thunkAPI) => {
  const fetchParams = {
    apiKey: VITE_API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: city,
      Page: 1,
      Limit: 100,
      FindByString: search,
    },
  };

  try {
    const { data: res } = await axios.post(VITE_BASE_URL, fetchParams);

    if (!res.status) {
      return thunkAPI.rejectWithValue(res.errors[0]);
    }

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

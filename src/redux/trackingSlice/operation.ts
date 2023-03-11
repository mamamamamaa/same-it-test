import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;

export interface ResponseTracking {
  Status: string;
  WarehouseSender: string;
  WarehouseRecipient: string;
}

export const getTrackingData = createAsyncThunk<
  ResponseTracking | undefined,
  string,
  { rejectValue: string }
>("tracking/track", async (documentNumber = "", thunkAPI) => {
  const fetchParams = {
    apiKey: VITE_API_KEY,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: documentNumber,
        },
      ],
    },
  };

  try {
    const { data: res } = await axios.post(VITE_BASE_URL, fetchParams);

    if (!res.success) {
      return thunkAPI.rejectWithValue(res.errors[0]);
    }

    console.log({
      Status: res.data[0].Status,
      WarehouseSender: res.data[0].WarehouseSender,
      WarehouseRecipient: res.data[0].WarehouseRecipient,
    });
    return {
      Status: res.data[0].Status,
      WarehouseSender: res.data[0].WarehouseSender,
      WarehouseRecipient: res.data[0].WarehouseRecipient,
    };
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

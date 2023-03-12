import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import { trackingReducer } from "./trackingSlice";
import { departuresReducer } from "./warehousesSlice";

const authPersistConfig = {
  key: "tracking",
  storage,
  whitelist: ["savedTracking"],
};

export const store = configureStore({
  reducer: {
    // @ts-ignore
    tracking: persistReducer(authPersistConfig, trackingReducer),
    warehouses: departuresReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

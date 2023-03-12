import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useWarehouses = () => {
  const isLoading = useAppSelector((store) => store.warehouses.isLoading);
  const error = useAppSelector((store) => store.warehouses.error);
  const data = useAppSelector((store) => store.warehouses.data);
  const currentRequest = useAppSelector(
    (store) => store.warehouses.currentRequest
  );

  return { isLoading, error, data, currentRequest };
};

export const useTracking = () => {
  const isLoading = useAppSelector((store) => store.tracking.isLoading);
  const error = useAppSelector((store) => store.tracking.error);
  const data = useAppSelector((store) => store.tracking.data);
  const savedTracking = useAppSelector((store) => store.tracking.savedTracking);
  const currentTrackNumber = useAppSelector(
    (store) => store.tracking.currentTrackNumber
  );

  return { isLoading, error, data, savedTracking, currentTrackNumber };
};

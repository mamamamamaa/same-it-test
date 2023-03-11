import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useDepartures = () => {
  const isLoading = useAppSelector((store) => store.departures.isLoading);
  const error = useAppSelector((store) => store.departures.error);
  const data = useAppSelector((store) => store.departures.data);

  return { isLoading, error, data };
};

export const useTracking = () => {
  const isLoading = useAppSelector((store) => store.tracking.isLoading);
  const error = useAppSelector((store) => store.tracking.error);
  const data = useAppSelector((store) => store.tracking.data);
  const savedTracking = useAppSelector((store) => store.tracking.savedTracking);

  return { isLoading, error, data, savedTracking };
};

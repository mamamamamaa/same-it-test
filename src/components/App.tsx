import { FC, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getTrackingData } from "../redux/trackingSlice/operation";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrackingData("20450676703183"));
  }, []);
  return <h1>Hello world</h1>;
};

import { FC, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getDepartures } from "../redux/departuresSlice/operations";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDepartures({ city: "Одеса" }));
  }, []);
  return <h1>Hello world</h1>;
};

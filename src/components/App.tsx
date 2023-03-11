import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Tracking</>} />
        <Route path="/departures" element={<>Departures</>} />
      </Route>
    </Routes>
  );
};

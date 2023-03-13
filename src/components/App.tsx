import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import HomePage from "../pages/HomePage";
import TrackingPage from "../pages/TrackingPage";
import WarehousesPage from "../pages/WarehousesPage";
//
// const HomePage = lazyImport("../pages/HomePage");
// const TrackingPage = lazyImport("../pages/TrackingPage");
// const WarehousesPage = lazyImport("../pages/WarehousesPage");

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
        </Route>
      </Routes>
    </>
  );
};

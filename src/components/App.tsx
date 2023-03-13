import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const TrackingPage = lazy(() => import("../pages/TrackingPage"));
const WarehousesPage = lazy(() => import("../pages/WarehousesPage"));

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

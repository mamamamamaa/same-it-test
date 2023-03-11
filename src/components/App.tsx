import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { lazyImport } from "../helpers/lazyImport";

const TrackingPage = lazyImport("../pages/TrackingPage");
const DeparturesPage = lazyImport("../pages/DeparturesPage");
const HomePage = lazyImport("../pages/HomePage");

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/departures" element={<DeparturesPage />} />
      </Route>
    </Routes>
  );
};

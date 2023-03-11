import { FC, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

export const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            Layout
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        }
      >
        <Route index element={<>Tracking</>} />
        <Route path="/departures" element={<>Departures</>} />
      </Route>
    </Routes>
  );
};

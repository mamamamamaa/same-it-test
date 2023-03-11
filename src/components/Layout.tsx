import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

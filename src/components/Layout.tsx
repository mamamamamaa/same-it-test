import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { HeaderBar } from "./HeaderBar";

export const Layout: FC = () => {
  return (
    <Container>
      <HeaderBar />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </Container>
  );
};

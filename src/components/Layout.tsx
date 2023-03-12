import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { HeaderBar } from "./Header/HeaderBar";
import { Footer } from "./Footer";

export const Layout: FC = () => {
  // TODO: add react-hot-toast
  return (
    <>
      <HeaderBar />
      <Container component="main" sx={{ minHeight: "100vh" }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

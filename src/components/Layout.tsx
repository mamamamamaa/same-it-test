import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { FC, Suspense, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

import { Footer } from "./Footer";
import { HeaderBar } from "./Header/HeaderBar";
import { useTracking, useWarehouses } from "../redux/hooks";
import { Loader } from "./Loader";

export const Layout: FC = () => {
  const { error: trackingError } = useTracking();
  const { error: warehouseError } = useWarehouses();

  useEffect(() => {
    const error = trackingError || warehouseError;

    if (error) {
      toast.error(error);
    }
  }, [trackingError, warehouseError]);

  return (
    <>
      <Toaster />
      <HeaderBar />
      <Loader />
      <Container
        component="main"
        sx={{ minHeight: "100vh", py: "50px", px: "50px" }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

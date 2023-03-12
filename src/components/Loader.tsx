import { FC } from "react";
import { Box, LinearProgress } from "@mui/material";
import { useTracking, useWarehouses } from "../redux/hooks";

export const Loader: FC = () => {
  const { isLoading: trackingLoading } = useTracking();
  const { isLoading: warehouseLoading } = useWarehouses();

  return (
    <Box sx={{ width: "100%", position: "absolute" }}>
      {(trackingLoading || warehouseLoading) && (
        <LinearProgress color="error" />
      )}
    </Box>
  );
};

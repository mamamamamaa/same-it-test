import { FC } from "react";
import { Box, Typography } from "@mui/material";

export const HomeTitle: FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "gray",
        pt: 10,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontFamily: "monospace", fontSize: 50, color: "#4B4949FF" }}
      >
        NovaPoshta
      </Typography>
      <Typography variant="body1">
        In this application, you can find the status of your parcel by waybill
        and find the post office. To do this, you need to go to the "Trucking"
        and "Departures" pages, respectively.
      </Typography>
    </Box>
  );
};

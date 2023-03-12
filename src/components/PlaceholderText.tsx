import { FC } from "react";
import { Typography } from "@mui/material";

interface Props {
  message: string;
}
export const PlaceholderText: FC<Props> = ({ message }) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ color: "gray", textAlign: "center", p: 5 }}
      >
        {message}
      </Typography>
    </>
  );
};

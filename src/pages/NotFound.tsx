import { FC } from "react";
import { Box, Typography } from "@mui/material";

const NotFound: FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", color: "gray", fontWeight: "bold", py: 20 }}
      >
        Nothing found along this path
      </Typography>
    </Box>
  );
};

export default NotFound;

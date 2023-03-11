import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        color: "white",
        backgroundColor: "#da291c",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <NavLink to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                }}
              >
                NovaPoshta
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | Created by mamamamamaa`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

import { FC } from "react";
import { Searchbar } from "../components/Searchbar";
import { TrackInfo } from "../components/TrackInfo";
import { Grid } from "@mui/material";
import { Saved } from "../components/Saved/Saved";

const TrackingPage: FC = () => {
  return (
    <>
      <Searchbar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TrackInfo />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Saved />
        </Grid>
      </Grid>
    </>
  );
};

export default TrackingPage;

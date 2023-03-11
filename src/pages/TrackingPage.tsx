import { FC } from "react";
import { Searchbar } from "../components/Searchbar";
import { TrackInfo } from "../components/TrackInfo";

const TrackingPage: FC = () => {
  return (
    <>
      <Searchbar />
      <TrackInfo />
    </>
  );
};

export default TrackingPage;

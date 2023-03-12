import { FC, Fragment } from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";

import { useWarehouses } from "../redux/hooks";

import style from "./Saved/ScrollBar.module.css";
import { PlaceholderText } from "./PlaceholderText";

export const WarehouseInfo: FC = () => {
  const { data } = useWarehouses();

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "gray",
          textAlign: "center",
        }}
      >
        Warehouses
      </Typography>
      {data.length > 0 ? (
        <Card
          variant="outlined"
          sx={{ borderRadius: "16px", maxHeight: "400px" }}
          className={style.box}
        >
          {data.map(({ Number, Description }) => (
            <Fragment key={Description}>
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Warehouse №{Number}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  {Description}
                </Typography>
              </CardContent>
              <Divider />
            </Fragment>
          ))}
        </Card>
      ) : (
        <>
          <Divider />
          <PlaceholderText message={"No results were found for this query"} />
        </>
      )}
    </>
  );
};

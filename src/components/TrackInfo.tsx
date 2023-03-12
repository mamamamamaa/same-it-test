import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { useTracking } from "../redux/hooks";
import { PlaceholderText } from "./PlaceholderText";

export const TrackInfo: FC = () => {
  const { data } = useTracking();

  return (
    <Card variant="outlined" sx={{ borderRadius: "16px" }}>
      <CardContent>
        {data ? (
          <>
            <Typography variant="h5" component="h2" gutterBottom>
              <span style={{ fontWeight: "bold" }}>Status</span>: {data.Status}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <span style={{ fontWeight: "bold" }}>Warehouse sender</span>:{" "}
              {data.WarehouseSender}
            </Typography>
            <Typography variant="body1" component="p">
              <span style={{ fontWeight: "bold" }}>Warehouse recipient</span>:{" "}
              {data.WarehouseRecipient}
            </Typography>
          </>
        ) : (
          <PlaceholderText
            message={
              "To display information about the parcel, enter TTN in the field above"
            }
          />
        )}
      </CardContent>
    </Card>
  );
};

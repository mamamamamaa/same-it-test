import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { useTracking } from "../redux/hooks";

export const TrackInfo: FC = () => {
  const { data } = useTracking();

  return (
    <Card variant="outlined" sx={{ borderRadius: "16px" }}>
      <CardContent>
        {data ? (
          <>
            <Typography variant="h5" component="h2" gutterBottom>
              Status: {data.Status}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Warehouse sender: {data.WarehouseSender}
            </Typography>
            <Typography variant="body1" component="p">
              Warehouse recipient: {data.WarehouseRecipient}
            </Typography>
          </>
        ) : (
          <Typography variant="h5" component="h2">
            To display information about the parcel, enter TTN in the field
            above
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

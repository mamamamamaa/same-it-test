// import {
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { FC, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC, useState } from "react";

export const TrackInfo: FC = () => {
  const [ttnList, setTtnList] = useState([
    "TTN 12345678901234",
    "TTN 23456789012345",
    "TTN 34567890123456",
  ]);

  const handleDelete = (index: number) => {
    const newList = [...ttnList];
    newList.splice(index, 1);
    setTtnList(newList);
  };

  const handleDeleteAll = () => {
    setTtnList([]);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" sx={{ borderRadius: "16px" }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Status:
            </Typography>
            <Typography variant="body1" component="p">
              Warehouse sender:
            </Typography>
            <Typography variant="body2" component="p">
              Warehouse recipient:
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card variant="outlined" sx={{ borderRadius: "16px" }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Saved TTN
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {ttnList.map((ttn, index) => (
                <React.Fragment key={ttn}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1" component="p">
                      {ttn}
                    </Typography>
                    <IconButton
                      onClick={() => handleDelete(index)}
                      aria-label="delete"
                    >
                      <DeleteIcon color={"error"} />
                    </IconButton>
                  </Box>
                  <Divider />
                </React.Fragment>
              ))}
              {ttnList.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <IconButton onClick={handleDeleteAll} aria-label="delete all">
                    <DeleteIcon color={"error"} />
                  </IconButton>
                  <Typography variant="body1" component="p">
                    Remove all
                  </Typography>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

import { FC, Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useTracking } from "../../redux/hooks";
import {
  getTrackingData,
  removeAllSaved,
  removeFromSaved,
} from "../../redux/trackingSlice";
import style from "./ScrollBar.module.css";

export const Saved: FC = () => {
  const dispatch = useAppDispatch();
  const { savedTracking } = useTracking();

  const handleDelete = (number: string) => dispatch(removeFromSaved(number));

  const handleDeleteAll = () => dispatch(removeAllSaved());

  const handleGetTrackInfo = (number: string) =>
    dispatch(getTrackingData(number));

  return (
    <>
      <Card variant="outlined" sx={{ borderRadius: "16px" }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Saved TTN
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box className={style.box}>
              {savedTracking.map(({ Number }) => (
                <Fragment key={Number}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => handleGetTrackInfo(Number)}
                      color="inherit"
                    >
                      <Typography variant="body1" component="p">
                        TTN {Number}
                      </Typography>
                    </Button>
                    <IconButton
                      onClick={() => handleDelete(Number)}
                      aria-label="delete"
                    >
                      <DeleteIcon color={"error"} />
                    </IconButton>
                  </Box>
                  <Divider />
                </Fragment>
              ))}
            </Box>
            {savedTracking.length > 0 ? (
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
            ) : (
              <Typography
                variant="h5"
                sx={{ textAlign: "center" }}
                component="h2"
              >
                Empty
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

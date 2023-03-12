import { FC, FormEvent } from "react";
import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../redux/hooks";
import { getWarehouses } from "../redux/warehousesSlice";

const WarehousesPage: FC = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const city = String(data.get("city"));
    const search = String(data.get("search"));

    if (city) {
      dispatch(getWarehouses({ city, search }));
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        gap: 10,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="city-name"
        name="city"
        label="City"
        variant="outlined"
        color="error"
        inputProps={{
          placeholder: "Odesa",
        }}
        fullWidth
        required
      />
      <TextField
        id="search-text"
        name="search"
        label="Warehouse number"
        variant="outlined"
        color="error"
        inputProps={{
          placeholder: "Відділення №10",
        }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          display: "flex",
          gap: 1,
          backgroundColor: "#da291c",
          "&:hover": {
            backgroundColor: "white",
            color: "#da291c",
          },
        }}
      >
        <Typography variant="body2">Get status TTN</Typography>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default WarehousesPage;

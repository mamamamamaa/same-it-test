import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { Request } from "../utils/interfaces";
import { getWarehouses, setCurrentRequest } from "../redux/warehousesSlice";
import { useAppDispatch, useWarehouses } from "../redux/hooks";

export const WarehouseSearchbar: FC = () => {
  const dispatch = useAppDispatch();
  const { currentRequest } = useWarehouses();
  const [request, setRequest] = useState<Request>({ city: "", query: "" });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => ({ ...prevState, query: event.target.value }));
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => ({ ...prevState, city: event.target.value }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCurrentRequest(request));
    dispatch(getWarehouses(request));
  };

  useEffect(() => {
    setRequest(currentRequest);
  }, [currentRequest]);

  return (
    <>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 50,
          gap: 10,
        }}
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="city-name"
          name="city"
          label="City"
          variant="outlined"
          color="error"
          value={request.city}
          onChange={handleCityChange}
          inputProps={{
            placeholder: "Одеса",
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
          value={request.query}
          onChange={handleSearchChange}
          inputProps={{
            placeholder: "Відділення №30",
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
          <Typography variant="body2">Get warehouses info</Typography>
          <SearchIcon />
        </Button>
      </form>
    </>
  );
};

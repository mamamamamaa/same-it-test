import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../redux/hooks";
import { getTrackingData } from "../redux/trackingSlice/operation";

export const Searchbar: FC = () => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getTrackingData(searchText));
  };

  return (
    <Box>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
          gap: 10,
        }}
      >
        <TextField
          id="search-text"
          label="TTN Number"
          variant="outlined"
          color="error"
          inputProps={{
            pattern: "^[0-9]{14}$|^[0-9]{15}$",
            title: "Enter a valid TTN number",
            placeholder: "20400048799000",
          }}
          fullWidth
          value={searchText}
          onChange={handleInputChange}
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
    </Box>
  );
};

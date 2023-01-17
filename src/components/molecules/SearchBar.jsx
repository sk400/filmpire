import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SearchBar = () => {
  return (
    <Box>
      <TextField
        id="standard-basic"
        variant="standard"
        color="warning"
        onChange={() => {}}
        InputProps={{
          startAdornment: (
            <InputAdornment
              sx={{
                color: "white",
                opacity: "0.6",
                input: {
                  color: "white",
                },
              }}
              position="start"
            >
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;

import { ClassNames } from "@emotion/react";
import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../../features/currentCategorySlice";

const useStyle = makeStyles({
  input: {
    color: "white",
  },
});

const SearchBar = () => {
  const classess = useStyle();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(searchTerm));
      navigate("/");
    }
  };

  return (
    <Box>
      <TextField
        id="standard-basic"
        variant="standard"
        color="warning"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        sx={{
          ".css-xlkdtz-MuiInputBase-root-MuiInput-root:before": {
            borderBottom: "1px solid #B2B2B2",
          },
        }}
        InputProps={{
          className: classess.input,
          startAdornment: (
            <InputAdornment
              sx={{
                color: "white",
                opacity: "0.6",
              }}
              position="start"
            >
              <IconButton
                type="button"
                onClick={() => {
                  if (searchTerm) {
                    dispatch(searchMovie(searchTerm));
                    navigate("/");
                  }
                }}
              >
                <Search sx={{ color: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;

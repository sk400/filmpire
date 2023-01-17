import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      sx={{ height: "90vh", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress fontSize="3rem" />
    </Stack>
  );
};

export default Loader;

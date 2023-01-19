import { Box, Button, Stack, Typography } from "@mui/material";

import React from "react";

const Pagination = ({ setPage, currentPage, totalPages }) => {
  const increasePageNo = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const decreasePageNo = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Button color="primary" variant="contained" onClick={decreasePageNo}>
          PREV
        </Button>
        <Typography variant="h5" mx={2}>
          {currentPage}
        </Typography>
        <Button color="primary" variant="contained" onClick={increasePageNo}>
          NEXT
        </Button>
      </Stack>
    </Box>
  );
};

export default Pagination;

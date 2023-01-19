import { Box, Grid } from "@mui/material";
import React from "react";

import { MovieCard } from "../molecules";

const Movies = ({ movies }) => {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {movies?.map((movie, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Movies;

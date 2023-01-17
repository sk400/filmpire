import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// https://image.tmdb.org/t/p/original

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to={`/movie/${movie?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
          style={{
            width: "200px",
            height: "300px",
            borderRadius: "16px",
          }}
        />
      </Link>
    </Box>
  );
};

export default MovieCard;

import { Scale } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
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
      <Link
        to={`/movie/${movie?.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          sx={{
            borderRadius: "16px",
            boxShadow: "none",
            transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
            "&:hover": {
              transform: `Scale(1.05)`,
            },
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            height="300px"
            sx={{ borderRadius: "16px" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5">
              {movie?.original_title.length > 13
                ? `${movie?.original_title?.substring(0, 12)}...`
                : movie?.original_title}
            </Typography>
            <Rating
              name="simple-controlled"
              value={movie?.vote_average / 2}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default MovieCard;

{
  /* <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
          style={{
            width: "200px",
            height: "300px",
            borderRadius: "16px",
          }}
        /> */
}

// movie?.original_title?.substring(0, 12)

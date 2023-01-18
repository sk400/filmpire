import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ featuredMovie }) => {
  // console.log(featuredMovie);
  return (
    <Box>
      <Box>
        <Link to={`/movie/${featuredMovie?.id}`}>
          <Card
            sx={{
              position: "relative",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`}
              height="500px"
              title={featuredMovie?.title}
              alt={featuredMovie?.title}
              sx={{
                my: 2,
                borderRadius: "8px",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                left: { xs: "10px", sm: "30px", lg: "50px" },
                bottom: { xs: "10px", sm: "30px", lg: "50px" },
                color: "white",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {featuredMovie?.Title || featuredMovie?.original_title}
              </Typography>
              <Typography variant="body2">
                {featuredMovie?.overview?.substring(0, 200)}...
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;

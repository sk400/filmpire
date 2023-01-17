import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../components/molecules";
import { Banner } from "../components/organisms";
import Movies from "../components/organisms/Movies";

import { useGetMoviesQuery } from "../services/movieApi";

const HomePage = () => {
  const { genreOrCategory, searchQuery } = useSelector(
    (state) => state?.currentGenreOrCategory
  );
  const { data, isFetching, error } = useGetMoviesQuery(
    genreOrCategory,
    searchQuery
  );

  if (isFetching) return <Loader />;

  const movies = data?.results;

  if (error) return "An error occured";

  const getFeaturedMovie = () => {
    const featuredMovieIndex = Math.floor(Math.random() * movies?.length);
    const featuredMovie = movies[featuredMovieIndex];
    return featuredMovie;
  };

  const featuredMovie = getFeaturedMovie();

  return (
    <Box>
      <Banner featuredMovie={featuredMovie} />
      <Movies movies={movies} />
    </Box>
  );
};

export default HomePage;

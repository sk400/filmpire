import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Loader, Pagination } from "../components/molecules";
import { Banner } from "../components/organisms";
import Movies from "../components/organisms/Movies";

import { useGetMoviesQuery } from "../services/movieApi";

const HomePage = () => {
  const { genreOrCategory, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetMoviesQuery({
    genreOrCategory,
    searchQuery,
    page,
  });

  if (isFetching) return <Loader />;

  const movies = data?.results;
  const totalPages = data?.total_pages;

  // console.log(data);

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
      <Pagination
        setPage={setPage}
        currentPage={page}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default HomePage;

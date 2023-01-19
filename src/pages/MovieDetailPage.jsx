import {
  Box,
  Card,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/molecules";
import Movies from "../components/organisms/Movies";
import { selectGenreOrCategory } from "../features/currentCategorySlice";
import {
  useGetMovieDetailsQuery,
  useGetRecommendationsQuery,
} from "../services/movieApi";
import { sidebarGenres } from "../utils/data";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetMovieDetailsQuery(movieId);
  const { data: recommendations } = useGetRecommendationsQuery({
    movieId,
    page,
  });

  if (isFetching) return <Loader />;

  const recommendedMovies = recommendations?.results;

  const getTopCasts = () => {
    const topCasts = data?.credits?.cast?.slice(0, 6);
    return topCasts;
  };

  const topCasts = getTopCasts();
  // console.log(topCasts);

  return (
    <Box sx={{ py: 4 }}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
              height="360"
              sx={{
                borderRadius: "16px",
                width: { xs: "240px", sm: "250px", lg: "250px" },
                // boxShadow: `rgb(0 0 0 / 80%) 0px 40px 58px -16px`,
                boxShadow: "-1px 5px 40px #413F42",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={8} justifyItems="center">
          <Stack direction="column" alignItems="center">
            <Typography
              variant="h3"
              textAlign="center"
              sx={{
                my: { xs: 2 },
                px: { xs: 2 },
              }}
            >
              {data?.original_title}
            </Typography>
            <Typography variant="h5" gutterBottom textAlign="center">
              {data?.tagline}
            </Typography>
            <Stack direction="row" spacing={7} mt={3}>
              <Stack
                alignItems="center"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
                spacing={2}
              >
                <Rating
                  name="simple-controlled"
                  value={data?.vote_average / 2}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="subtitle1">
                  {`${data?.vote_average} / 10 `}
                </Typography>
              </Stack>
              <Typography variant="h6" fontWeight={500}>
                {data?.runtime} mins
              </Typography>
            </Stack>
          </Stack>
          <Stack
            flexWrap="wrap"
            justifyContent="space-around"
            direction="row"
            gap={4}
            my={4}
          >
            {data?.genres?.map((genre) => {
              const foundGenre = sidebarGenres?.find(
                (item) => item?.id === genre?.id
              );
              return (
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() => {
                    dispatch(selectGenreOrCategory(genre?.id));
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <img
                      src={foundGenre?.icon}
                      alt={foundGenre?.name}
                      style={{ width: "30px" }}
                    />
                    <Typography variant="subtitle1">
                      {foundGenre?.name}
                    </Typography>
                  </Stack>
                </Link>
              );
            })}
          </Stack>
          <Box sx={{ px: { xs: 1 } }}>
            <Typography variant="h5" gutterBottom>
              Overview
            </Typography>
            <Typography paragraph>{data?.overview}</Typography>
          </Box>
          <Box sx={{ px: { xs: 1 }, mt: 5 }}>
            <Typography variant="h5" gutterBottom>
              Top cast
            </Typography>
            <Grid container spacing={2}>
              {topCasts?.map((cast) => (
                <Grid
                  item
                  key={cast?.id}
                  xs={4}
                  sm={3}
                  lg={2}
                  justifyItems="center"
                >
                  <Link
                    to={`/actor/${cast?.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Stack direction="column" alignItems="center">
                      <img
                        src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`}
                        alt=""
                        style={{
                          height: "120px",
                          width: "100%",
                          maxWidth: "7em",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                      <Typography variant="subtitle1" align="center">
                        {cast?.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        sx={{ opacity: "0.6" }}
                      >
                        {cast?.known_for_department} ({cast?.character})
                      </Typography>
                    </Stack>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Stack direction="column" alignItems="center" mt={10}>
        <Typography variant="h3" mb={5}>
          You might also like
        </Typography>
        <Movies movies={recommendedMovies} />
      </Stack>
    </Box>
  );
};

export default MovieDetailPage;

import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/molecules";
import { Movies } from "../components/organisms";
import {
  useGetActorDetailsQuery,
  useGetMoviesOfAnActorQuery,
} from "../services/movieApi";

const ActorDetailPage = () => {
  const { actorId } = useParams();
  // console.log(actorId);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const { data, isFetching, error } = useGetActorDetailsQuery(actorId);
  const { data: moviesByActor } = useGetMoviesOfAnActorQuery(actorId);

  const movies = moviesByActor?.results;

  if (isFetching) return <Loader />;

  console.log(data);

  if (error) return "An error occured.";

  const getBirthDate = () => {
    const date = new Date(data?.birthday);
    const birthDate = date?.toLocaleDateString(undefined, options);
    return birthDate;
  };

  const birthDate = getBirthDate();
  // console.log(birthDate);

  return (
    <Box py={3} px={1}>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/original${data?.profile_path}`}
            alt={`${data?.name}`}
            sx={{
              borderRadius: "16px",
              minHeight: "400px",
              minWidth: "200px",
              maxWidth: "420px",
              maxHeight: "620px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          py={3}
          sx={{
            pl: { lg: 3 },
            pt: { lg: 15 },
          }}
        >
          <Typography variant="h2" mb={5}>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {birthDate}
          </Typography>
          <Typography
            variant="subtitle1"
            paragraph
            sx={{
              lineHeight: { xs: "20px", lg: "25px" },
            }}
          >
            {data?.biography}
          </Typography>
        </Grid>
      </Grid>
      <Box mt={10}>
        <Typography variant="h3" align="center" mb={7}>
          Movies
        </Typography>
        <Movies movies={movies} />
      </Box>
    </Box>
  );
};

export default ActorDetailPage;

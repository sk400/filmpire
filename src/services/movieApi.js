import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// movieDetail = https://api.themoviedb.org/3/movie/550?api_key=0fe1d442244aa8057a8d1339061524f0&append_to_response=videos,credits
// const base_url = "https://api.themoviedb.org/3";
// genres = https://api.themoviedb.org/3/discover/movie?api_key=0fe1d442244aa8057a8d1339061524f0&with_genres=28
// categories = https://api.themoviedb.org/3/movie/popular?api_key=0fe1d442244aa8057a8d1339061524f0
// search = https://api.themoviedb.org/3/search/movie/?api_key=0fe1d442244aa8057a8d1339061524f0&query=Thor
//  movies by actor = https://api.themoviedb.org/3/discover/movie?api_key=0fe1d442244aa8057a8d1339061524f0&with_cast=4
//  actor details =https://api.themoviedb.org/3/person/4?api_key=0fe1d442244aa8057a8d1339061524f0
//  suggested Movies = https://api.themoviedb.org/3/movie/550/recommendations?api_key=0fe1d442244aa8057a8d1339061524f0

const tmdb_key = process.env.REACT_APP_TMDB_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ genreOrCategory, searchQuery, page }) => {
        // get movies by category

        if (genreOrCategory && typeof genreOrCategory === "string") {
          return `/movie/${genreOrCategory}?page=${page}&api_key=${tmdb_key}`;
        }

        // get movies by genre

        if (genreOrCategory && typeof genreOrCategory === "number") {
          return `/discover/movie?page=${page}&api_key=${tmdb_key}&with_genres=${genreOrCategory}`;
        }

        // get movies by search

        if (searchQuery) {
          return `/search/movie?page=${page}&api_key=${tmdb_key}&query=${searchQuery}`;
        }

        // get popular movies by default

        return `/movie/popular?page=${page}&api_key=${tmdb_key}`;
      },
    }),

    // movie details by movieId

    getMovieDetails: builder.query({
      query: (movieId) =>
        `/movie/${movieId}?api_key=${tmdb_key}&append_to_response=videos,credits`,
    }),

    // actor details

    getActorDetails: builder.query({
      query: (actorId) => `/person/${actorId}?api_key=${tmdb_key}`,
    }),

    // movies of an actor

    getMoviesOfAnActor: builder.query({
      query: (actorId) =>
        `/discover/movie?api_key=${tmdb_key}&with_cast=${actorId}`,
    }),

    // get recommendations

    getRecommendations: builder.query({
      query: ({ movieId, page }) =>
        `/movie/${movieId}/recommendations?page=${page}&api_key=${tmdb_key}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetActorDetailsQuery,
  useGetMoviesOfAnActorQuery,
  useGetRecommendationsQuery,
} = movieApi;

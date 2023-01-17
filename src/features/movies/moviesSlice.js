import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const movies = (state) => state.movies.movies;

import { configureStore } from "@reduxjs/toolkit";
import { currentCategorySlice } from "../features/currentCategorySlice";
import { movieSlice } from "../features/movies/moviesSlice";
import { movieApi } from "../services/movieApi";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieSlice.reducer,
    currentGenreOrCategory: currentCategorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import { currentCategorySlice } from "../features/currentCategorySlice";
import { movieApi } from "../services/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    currentGenreOrCategory: currentCategorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

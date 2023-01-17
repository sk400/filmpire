import { createSlice } from "@reduxjs/toolkit";

export const currentCategorySlice = createSlice({
  name: "genreOrCategory",
  initialState: {
    searchQuery: "",
    genreOrCategory: "",
  },
  reducers: {
    selectGenreOrCategory(state, action) {
      state.genreOrCategory = action.payload;
      state.searchQuery = "";
    },
    searchMovie(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } =
  currentCategorySlice.actions;

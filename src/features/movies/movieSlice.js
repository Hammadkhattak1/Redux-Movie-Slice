import axios from "../../common/movieApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchText) => {
    console.log("searchText", searchText);
    const movieText = "Prey";
    const { data } = await axios.get(
      `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${
        searchText ? searchText : movieText
      }&type=movie`
    );

    return { data: data.Search, isLoading: false };
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (searchText) => {
    const seriesText = "Better Call Saul";
    const { data } = await axios.get(
      `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${
        searchText ? searchText : seriesText
      }&type=series`
    );

    return { data: data.Search, isLoading: false };
  }
);

export const fetchDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (id) => {
    const { data } = await axios.get(
      `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}&Plot=full`
    );

    return { data: data, isLoading: false };
  }
);

const initialState = {
  Movies: [],
  Series: [],
  Details: {},
  isLoading: true,
  searchedText: "",
};

export const counterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeDetaildata: (state, { payload }) => {
      state.Details = {};
    },
  },

  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, Movies: [], isLoading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, Movies: payload.data, isLoading: payload.isLoading };
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      return { ...state, Series: payload.data, isLoading: payload.isLoading };
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log("movies details payload", payload.data);

      return { ...state, Details: payload.data, isLoading: payload.isLoading };
    },
    [fetchAsyncMovies.rejected]: () => {
      return { Movies: [], isLoading: false };
    },
  },
});

export const { loadingState,removeDetaildata } = counterSlice.actions;

export default counterSlice.reducer;

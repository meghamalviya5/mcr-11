import { createContext, useReducer } from "react";
import { movies } from "../db/data";
import { movieReducer } from "../reducers/MovieReducer";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const initialState = {
    movies: localStorage.getItem("Movies")
      ? JSON.parse(localStorage.getItem("Movies"))
      : movies,
    filters: {
      searchFilter: "",
      filterByGenre: "",
      filterByYear: "",
      filterByRating: "",
    },
    starred: localStorage.getItem("StarredMovies")
      ? JSON.parse(localStorage.getItem("StarredMovies"))
      : [],
    watchlist: localStorage.getItem("WatchList")
      ? JSON.parse(localStorage.getItem("WatchList"))
      : [],
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  let filteredMovies = state.movies;

  if (state.filters.searchFilter.length > 0) {
    filteredMovies = state.movies.filter(
      ({ title, director, cast }) =>
        title
          .toLowerCase()
          .includes(state.filters.searchFilter.toLowerCase()) ||
        director
          .toLowerCase()
          .includes(state.filters.searchFilter.toLowerCase()) ||
        cast.some((element) =>
          element
            .toLowerCase()
            .includes(state.filters.searchFilter.toLowerCase())
        )
    );
  }

  if (state.filters.filterByGenre.length > 0) {
    // if (state.filters.filterByGenre === "all") {
    //   filteredMovies = state.movies;
    // } else {
    if (state.filters.filterByGenre !== "all") {
      filteredMovies = state.movies.filter(({ genre }) =>
        genre.some((element) => element === state.filters.filterByGenre)
      );
    }
  }

  if (state.filters.filterByYear.length > 0) {
    if (state.filters.filterByYear !== "releaseYear") {
      filteredMovies = filteredMovies.filter(
        ({ year }) => year === Number(state.filters.filterByYear)
      );
    }
  }

  if (state.filters.filterByRating.length > 0) {
    if (state.filters.filterByRating !== "0") {
      filteredMovies = filteredMovies.filter(
        ({ rating }) => rating === Number(state.filters.filterByRating)
      );
    }
  }

  const existInStarred = (movieId) => {
    const foundMovie = state.starred.find((movie) => movie.id === movieId);
    return foundMovie;
  };

  const existInWatchList = (movieId) => {
    const foundMovie = state.watchlist.find((movie) => movie.id === movieId);
    return foundMovie;
  };

  const addToStarred = (movie) => {
    const updatedStarred = [...state.starred, movie];

    localStorage.setItem("StarredMovies", JSON.stringify(updatedStarred));

    dispatch({
      type: "UPDATE_STARRED_WATCHLIST",
      payload: { key: "starred", value: updatedStarred },
    });
  };

  const addToWatchList = (movie) => {
    const updatedWatchList = [...state.watchlist, movie];

    localStorage.setItem("WatchList", JSON.stringify(updatedWatchList));

    dispatch({
      type: "UPDATE_STARRED_WATCHLIST",
      payload: { key: "watchlist", value: updatedWatchList },
    });
  };

  const removeFromStarred = (movieId) => {
    const updatedStarred = state.starred.filter(
      (movie) => movie.id !== movieId
    );

    localStorage.setItem("StarredMovies", JSON.stringify(updatedStarred));

    dispatch({
      type: "UPDATE_STARRED_WATCHLIST",
      payload: { key: "starred", value: updatedStarred },
    });
  };

  const removeFromWatchList = (movieId) => {
    const updatedWatchList = state.watchlist.filter(
      (movie) => movie.id !== movieId
    );

    localStorage.setItem("WatchList", JSON.stringify(updatedWatchList));

    dispatch({
      type: "UPDATE_STARRED_WATCHLIST",
      payload: { key: "watchlist", value: updatedWatchList },
    });
  };

  const addMovie = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  const valueProps = {
    state,
    dispatch,
    filteredMovies,
    existInStarred,
    existInWatchList,
    removeFromStarred,
    addToStarred,
    removeFromWatchList,
    addToWatchList,
    addMovie,
  };

  return (
    <MoviesContext.Provider value={valueProps}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;

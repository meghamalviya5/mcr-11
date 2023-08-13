import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MovieContext";

const Filters = () => {
  const {
    state: { movies },
    dispatch,
  } = useContext(MoviesContext);

  const genres = [
    ...new Set(movies.reduce((acc, { genre }) => [...acc, ...genre], [])),
  ];

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let releaseYear = [];
  const minYear = [1990];
  const currentYear = new Date().getFullYear();
  for (let year = 1990; year <= currentYear; year++) {
    releaseYear = [...releaseYear, year];
  }
  //const releaseYear = minYear.reduce((acc, curr) => {}, acc);
  return (
    <div className="flex flex-space-between">
      <select
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "filterByGenre", value: e.target.value },
          })
        }
      >
        <option value="all">All genres</option>
        {genres.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "filterByYear", value: e.target.value },
          })
        }
      >
        <option value="releaseYear">Release Year</option>
        {releaseYear.map((year) => (
          <option>{year}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "filterByRating", value: e.target.value },
          })
        }
      >
        <option value="0">Rating</option>
        {ratings.map((rating) => (
          <option>{rating}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

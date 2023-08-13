import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/MovieContext";

const NavBar = () => {
  const { dispatch } = useContext(MoviesContext);

  return (
    <div className="flex flex-space-between">
      <h3>IMDB</h3>
      <input
        type="search"
        placeholder="Search the movies by cast, title and director..."
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTERS",
            payload: { key: "searchFilter", value: e.target.value },
          })
        }
      />
      <div className="flex flex-gap-2">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watch List</Link>
        <Link to="/starred-movies">Starred Movies</Link>
      </div>
    </div>
  );
};

export default NavBar;

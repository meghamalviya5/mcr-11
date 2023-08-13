import React from "react";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const MoviesHeader = () => {
  return (
    <div>
      <h3>Movies</h3>
      <Filters />
      <Link to="/add-movie" className="link">
        <button>Add a Movie</button>
      </Link>
    </div>
  );
};

export default MoviesHeader;

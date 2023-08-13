import React from "react";
import Filters from "../Filters/Filters";

const MoviesHeader = () => {
  return (
    <div>
      <h3>Movies</h3>
      <Filters />
      <button>Add a Movie</button>
    </div>
  );
};

export default MoviesHeader;

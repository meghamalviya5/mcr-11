import React, { useContext } from "react";
import MoviesHeader from "../../components/MoviesHeader/MoviesHeader";
import { MoviesContext } from "../../contexts/MovieContext";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = () => {
  const {
    filteredMovies,
    existInStarred,
    existInWatchList,
    removeFromStarred,
    addToStarred,
    removeFromWatchList,
    addToWatchList,
  } = useContext(MoviesContext);

  return (
    <div>
      <MoviesHeader />
      <div className="flex flex-gap-3 movie-card">
        {filteredMovies.map((movie) => {
          const { id, title, summary, imageURL } = movie;
          return (
            <Link to={`/movie-details/${id}`} className="link" key={id}>
              <img src={imageURL} alt="movie" />
              <h3>{title}</h3>
              <p>{summary}</p>
              <div className="flex flex-space-between">
                <button
                  onClick={() => {
                    existInStarred(id)
                      ? removeFromStarred(id)
                      : addToStarred(movie);
                  }}
                >
                  {existInStarred(id) ? "Unstar" : "Star"}
                </button>
                <button
                  onClick={() => {
                    existInWatchList(id)
                      ? removeFromWatchList(id)
                      : addToWatchList(movie);
                  }}
                >
                  {existInWatchList(id)
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"}
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;

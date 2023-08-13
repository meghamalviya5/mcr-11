import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../../contexts/MovieContext";

const MovieDetails = () => {
  const { movieId } = useParams();
  const {
    filteredMovies,
    existInStarred,
    existInWatchList,
    removeFromStarred,
    addToStarred,
    removeFromWatchList,
    addToWatchList,
  } = useContext(MoviesContext);

  const movie = filteredMovies.find((movie) => movie.id === Number(movieId));

  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = movie;

  return (
    <div>
      <div>
        <img src={imageURL} alt="movie" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{summary}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <p>Writer: {writer}</p>
        <p>Genre: {genre.reduce((acc, gen) => acc + gen + ",", "")}</p>
        <p>Case: {cast.reduce((acc, cast) => acc + cast + ",", "")}</p>
      </div>
      <div className="flex flex-space-between">
        <button
          onClick={() => {
            existInStarred(id) ? removeFromStarred(id) : addToStarred(movie);
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
          {existInWatchList(id) ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;

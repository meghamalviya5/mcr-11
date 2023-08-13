import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MovieContext";

const WatchList = () => {
  const {
    state: { watchlist },
    removeFromWatchList,
  } = useContext(MoviesContext);

  return (
    <div>
      {watchlist.map((movie) => {
        const { id, title, summary, imageURL } = movie;
        return (
          <div key={id}>
            <img src={imageURL} alt="movie" />
            <h3>{title}</h3>
            <p>{summary}</p>
            <div className="flex flex-space-between">
              <button
                onClick={() => {
                  removeFromWatchList(id);
                }}
              >
                Remove from Watchlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;

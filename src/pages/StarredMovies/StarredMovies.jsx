import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MovieContext";

const StarredMovies = () => {
  const {
    state: { starred },
    removeFromStarred,
  } = useContext(MoviesContext);

  return (
    <div>
      {starred.map((movie) => {
        const { id, title, summary, imageURL } = movie;
        return (
          <div key={id}>
            <img src={imageURL} alt="movie" />
            <h3>{title}</h3>
            <p>{summary}</p>
            <div className="flex flex-space-between">
              <button
                onClick={() => {
                  removeFromStarred(id);
                }}
              >
                Unstar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarredMovies;

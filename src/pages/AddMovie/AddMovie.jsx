import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MovieContext";

const AddMovie = () => {
  // title, summary, year, cast, genre, rating, director, writer and imageURL
  const {
    state: { newMovie },
    dispatch,
    addMovie,
  } = useContext(MoviesContext);

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let releaseYear = [];
  const minYear = [1990];
  const currentYear = new Date().getFullYear();
  for (let year = 1990; year <= currentYear; year++) {
    releaseYear = [...releaseYear, year];
  }

  return (
    <div>
      <h3>Add New Movie</h3>
      <form onSubmit={(e) => addMovie(e)}>
        <div>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={newMovie.year}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "year", value: e.target.value },
              })
            }
          >
            <option value="releaseYear">Release Year</option>
            {releaseYear.map((year) => (
              <option>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={newMovie.rating}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "rating", value: e.target.value },
              })
            }
          >
            <option value="0">Rating</option>
            {ratings.map((rating) => (
              <option>{rating}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newMovie.title}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "title", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            cols="50"
            rows="5"
            id="desc"
            name="desc"
            value={newMovie.summary}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "summary", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={newMovie.genre}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "genre", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="cast">Cast:</label>
          <input
            type="text"
            id="cast"
            name="cast"
            value={newMovie.cast}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "cast", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="writer">Writer:</label>
          <input
            type="text"
            id="writer"
            name="writer"
            value={newMovie.writer}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "writer", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={newMovie.director}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "director", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={newMovie.imageUrl}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "imageUrl", value: e.target.value },
              })
            }
          />
        </div>
        <button className="btn p-s" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;

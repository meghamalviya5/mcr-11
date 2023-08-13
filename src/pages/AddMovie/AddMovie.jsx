import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MovieContext";

const AddMovie = () => {
  // title, summary, year, cast, genre, rating, director, writer and imageURL
  const { state, dispatch, addMovie } = useContext(MoviesContext);

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
          <label htmlFor="dept">Department:</label>
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
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newMovie.price}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "price", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={newMovie.stock}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "stock", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={newMovie.sku}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "sku", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={newMovie.supplier}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "supplier", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="delivered">Delivered:</label>
          <input type="text" id="delivered" name="delivered" value={0} />
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddMovie;

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import WatchList from "./pages/WatchList/WatchList";
import StarredMovies from "./pages/StarredMovies/StarredMovies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import NavBar from "./components/NavBar/NavBar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MovieList />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/starred-movies" element={<StarredMovies />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

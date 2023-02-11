import { Route, Routes } from 'react-router-dom';
// import { lazy } from "react";
import Layout from 'pages/Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Review from 'pages/Reviews/Reviews';

// const Home = lazy(()=>('pages/Home/Home'));
// const Movies = lazy(()=>('pages/Movies/Movies'));
// const MovieDetails = lazy(()=>('pages/MovieDetails/MovieDetails'));
// const Layout = lazy(()=>('pages/Layout/Layout'));
// const Cast = lazy(()=>('pages/Cast/Cast'));
// const Review = lazy(()=>('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
};

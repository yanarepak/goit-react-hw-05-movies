import { Route, Routes } from 'react-router-dom';
import { Suspense } from "react";
import AppBar from 'components/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Review from 'pages/Reviews/Reviews';

// const Home = lazy(()=>('pages/Home/Home'));
// const Movies = lazy(()=>('pages/Movies/Movies'));
// const MovieDetails = lazy(()=>('pages/MovieDetails/MovieDetails'));
// const Cast = lazy(()=>('pages/Cast/Cast'));
// const Review = lazy(()=>('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <AppBar/>
        <Suspense fallback={<p>Loading....</p>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
    </div>
  );
};

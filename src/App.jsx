import HomePage from 'page/HomePage';
import MoviePage from 'page/MoviePage';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'page/MovieDetails';
import SharedLayout from 'SharedLayout';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

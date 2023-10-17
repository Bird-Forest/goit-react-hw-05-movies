import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('page/SharedLayout'));
const HomePage = lazy(() => import('page/HomePage'));
const MoviePage = lazy(() => import('page/MoviePage'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const NotFound = lazy(() => import('page/NotFoundPage'));

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

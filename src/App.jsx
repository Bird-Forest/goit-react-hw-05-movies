import HomePage from 'page/HomePage';
// import { Header, WrapLink } from 'App.styled';
import MoviePage from 'page/MoviePage';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'page/MovieDetails';
import SharedLayout from 'SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};

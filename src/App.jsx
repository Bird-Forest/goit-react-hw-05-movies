import HomePage from 'page/HomePage';
import { Header, WrapLink } from 'App.styled';
import MoviePage from 'page/MoviePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetails from 'page/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header>
        <WrapLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </WrapLink>
      </Header>

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

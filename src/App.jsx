import React from 'react';
import Header from 'components/Header/Header';
// import { fetchMovies } from 'servise/api';
import { Route, Routes } from 'react-router-dom';

import HomePage from 'page/HomePage';
import MoviePage from 'page/MoviePage';
import { StyledLink, WrapLink } from 'App.styled';

export const App = () => {
  // fetchMovies();
  return (
    <div>
      <Header>
        <WrapLink>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </WrapLink>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

import React from 'react';
import { Top } from './Header.styled';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import HomePage from 'page/HomePage';
// import MoviePage from 'page/MoviePage';

export default function Header() {
  return (
    <Top>
      {/* <nav>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes> */}
    </Top>
  );
}

import { Header, WrapLink } from 'SharedLayout.styled';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <WrapLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </WrapLink>
      </Header>

      <Outlet />
    </div>
  );
}

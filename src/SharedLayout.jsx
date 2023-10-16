import { Container, Header, WrapLink } from 'SharedLayout.styled';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <WrapLink>
          <NavLink className="navigate" to="/">
            Home
          </NavLink>
          <NavLink className="navigate" to="/movies">
            Movies
          </NavLink>
        </WrapLink>
      </Header>

      <Outlet />
    </Container>
  );
}

import { Container, Header, WrapLink } from 'page/SharedLayout.styled';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader';

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
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

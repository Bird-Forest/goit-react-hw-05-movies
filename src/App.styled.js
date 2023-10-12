import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapLink = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  /* display: block;
  width: 60px;
  height: 40px;
  background-color: blue;
  color: white;
  font-size: 16px;
  border: 1px solid white;

  & :active {
    background-color: yellow;
    color: blue;
  } */
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;

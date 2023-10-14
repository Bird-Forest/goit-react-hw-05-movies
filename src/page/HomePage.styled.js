import styled from 'styled-components';

export const WrapHomePage = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`;

export const TitleHomePage = styled.h1`
  font-family: 'Prompt', sans-serif;
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #0e1841;
  padding-left: 20px;
  margin: 0, 0, 20px, 0;
`;
export const ListPopularMovies = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
`;
export const PopularMovie = styled.li`
  min-width: 320px;
  margin: 0;
  padding: 0;
`;
export const TitlePopMovie = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #0e1841;
  cursor: pointer;
  margin: 0;
  padding: 0;
  &:hover,
  :focus,
  :active {
    color: #28a8ad;
  }
`;

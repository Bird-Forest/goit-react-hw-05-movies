import styled from 'styled-components';

export const WrapFilm = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding: 20px;
  margin-top: 100px;
`;
export const Poster = styled.img`
  display: block;
  min-width: 320px;
  min-height: 480px;
  object-fit: cover;
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleFilm = styled.h2`
  font-family: 'Prompt', sans-serif;
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #0e1841;
`;
export const Score = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #0e1841;
`;
export const TitleDetails = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #0e1841;
`;
export const TextDetails = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #0e1841;
`;
export const WrappGeners = styled.ul`
  display: flex;
`;
export const Genre = styled.li`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
`;
export const WrapPlus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding: 20px;
`;

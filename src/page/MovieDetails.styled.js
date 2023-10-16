import styled from 'styled-components';

export const WrapFilm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  min-width: 320px;
  padding: 20px;
  margin-top: 80px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 0 20px 0;
  @media screen and (min-width: 600px) {
    width: 400px;
  }
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 20px;
    border-radius: 10px;
    background-color: #0e1841;
    color: #249fa3;
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 0;
    margin: 0 0 20px 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #249fa3;
      color: #0e1841;
    }
  }
`;

export const Poster = styled.img`
  display: block;
  width: 300px;
  height: 450px;
  object-fit: cover;
  margin: 0;
  @media screen and (min-width: 600px) {
    width: 400px;
    height: 600px;
  }
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  margin: 0 0 20px 0;
  @media screen and (min-width: 600px) {
    min-width: 420px;
  }
  @media screen and (min-width: 900px) {
    justify-content: flex-start;
    align-items: center;
    width: 440px;
  }
`;
export const TitleFilm = styled.h2`
  font-family: 'Prompt', sans-serif;
  display: block;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
  /* @media screen and (min-width: 900px) {
    font-size: 32px;
  } */
`;
export const Score = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
  /* @media screen and (min-width: 900px) {
    font-size: 28px;
  } */
`;
export const TitleOverview = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
  /* @media screen and (min-width: 900px) {
    font-size: 28px;
  } */
`;
export const TextOverview = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0 0 20px 0;
  color: #0e1841;
  /* @media screen and (min-width: 900px) {
    font-size: 20px;
  } */
`;
export const TitleGenres = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
  /* @media screen and (min-width: 900px) {
    font-size: 28px;
  } */
`;
export const WrappGeners = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 320px;
  @media screen and (min-width: 600px) {
    min-width: 420px;
  }
  @media screen and (min-width: 900px) {
    width: 440px;
  }
`;
export const Genre = styled.li`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const WrapPlus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
`;
export const WrapLinkPlus = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 320px;
  height: 40px;
  gap: 40px;

  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 20px 0;
    color: #0e1841;
    text-decoration: none;
    transition: all 0.3s;

    &.active {
      color: #249fa3;
    }
  }
`;

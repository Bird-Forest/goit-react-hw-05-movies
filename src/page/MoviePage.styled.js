import styled from 'styled-components';

export const WrapMoviePage = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`;
export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const InputSearch = styled.input`
  display: inline-block;
  width: 100%;
  height: 47px;
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #0e1841;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: 2px solid #0e1841;
  padding: 0 0 0 10px;
  margin: 0;
`;
export const BtnSearch = styled.button`
  display: inline-block;
  width: 80px;
  height: 50px;
  outline: 2.7px solid #0e1841;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #0e1841;

  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  cursor: pointer;

  .icon {
    width: 28px;
    height: 28px;
    fill: #249fa3;
  }
  .icon:hover,
  .icon:focus {
    fill: #0e1841;
  }
  &:hover,
  :focus {
    background-color: #249fa3;
  }
`;

export const ListMovieByName = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
`;
export const MovieByName = styled.li`
  min-width: 320px;
  margin: 0;
  padding: 0;
`;
export const TitleMovie = styled.p`
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

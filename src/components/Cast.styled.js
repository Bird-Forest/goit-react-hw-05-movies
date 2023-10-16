import styled from 'styled-components';
export const WrapCast = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 900px) {
    width: 900px;
    height: 600px;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
      height: 100px;
    }

    &::-webkit-scrollbar-track {
      background: #f6f6f6;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #0e1841;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #249fa3;
    }
  }
  @media screen and (min-width: 1400px) {
    width: 480px;
    height: 600px;
  }
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;
export const Profile = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  object-fit: cover;
`;
export const ActorName = styled.h4`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #0e1841;
  margin: 0;
  padding: 0;
`;
export const Character = styled.h4`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #0e1841;
  margin: 0;
  padding: 0;
`;

import styled from 'styled-components';
export const WrapReviews = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #0e1841;
  margin: 0 0 20px 0;
  padding: 0;

  @media screen and (min-width: 900px) {
    width: 900px;
    height: 300px;
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
      height: 50px;
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
export const ItemReviews = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Author = styled.h4`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #0e1841;
  margin: 0;
  padding: 0;
`;
export const Content = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #0e1841;
  margin: 0;
  padding: 0;
`;

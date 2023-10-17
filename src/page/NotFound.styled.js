import styled from 'styled-components';

export const Ground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 400px;
  margin-top: 80px;

  font-family: 'Prompt', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #0e1841;

  .icon-ground {
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    fill: #0e1841;
  }
`;

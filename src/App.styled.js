import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e1841;
  width: 100%;
  height: 80px;
`;

export const WrapLink = styled.nav`
  display: flex;
  gap: 20px;

  .typeBtn {
    width: 60px;
    height: 40px;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    display: inline-block;
    padding: 5px;
    font-size: 14px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
    }
  }
`;

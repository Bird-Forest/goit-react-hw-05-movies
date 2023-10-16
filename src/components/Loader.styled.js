import { styled } from 'styled-components';

export const LoaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
`;

export const Loader = styled.span`
  position: absolute;
  top: 300px;
  margin-left: auto;
  margin-right: auto;

  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(
      circle 25px at 25px 25px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
    linear-gradient(#fff 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: '';
    left: 60px;
    bottom: 18px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #249fa3;
    background-image: radial-gradient(
        circle 8px at 18px 18px,
        #fff 100%,
        transparent 0
      ),
      radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }
  &::after {
    content: '';
    left: 94px;
    bottom: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #0e1841;
    background-image: radial-gradient(
        circle 5px at 12px 12px,
        #fff 100%,
        transparent 0
      ),
      radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

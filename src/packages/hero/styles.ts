import styled from 'styled-components';
import { colors } from '@ntm-package/theme';

export const Home = styled.section`
  position: relative;
  height: 100vh;
  padding: 0 10px;
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url("/images/banner.png");
    opacity: .7;
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: ${colors.background.accent};
    opacity: .4;
  }
`;

export const Greeting = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

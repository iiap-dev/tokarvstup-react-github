import { colors } from '@ntm-package/theme';
import styled from 'styled-components';
import {
  IMobile,
} from './types';

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
    opacity: .5;
  }
`;

export const Greeting = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const TextCard = styled.div`
  background: white;
  padding: 20px;
  width: 90%;
  border-radius: 16px;
`;

export const About = styled.div<IMobile>`
  display: flex;
  justify-content: center;
  ${({ isMobile }) => isMobile && `align-items: center`};
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};

  //> div {
  //  &:not(:last-child) {
  //    margin-bottom: 20px;
  //  }
  //}
`;

/// //
// export const Container = styled.div<IMobile>`
//   display: flex;
//   flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
//   padding: 20px 0;
// `;
//
// export const TextCardsContainer = styled.div<IMobile>`
//   display: flex;
//   width: ${({ isMobile }) => (isMobile ? '100%' : '70%')};
//   flex-direction: column;
//   margin-bottom: ${({ isMobile }) => (isMobile ? '25px' : '0')};
// `;
//
// export const ButtonCardsContainer = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
// `;
//
// export const Title = styled.h1<ITitle>`
//   padding: 10px 0;
// `;
//
// export const SubTitle = styled.h2<ISubTitle>`
//   padding: 10px 0;
// `;
//
// export const Text = styled.span`
//   background-color: ${colors.primary};
//   font-weight: 300;
// `;
//
// export const Description = styled.div<IDescription>`
//   margin: ${({ isMobile }) => (isMobile ? '0 20px' : '0 80px')};
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;
//
// export const Row = styled.div<IMobile>`
//   display: flex;
//   flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
//   flex-grow: 1;
// `;
//
// export const CaptionWrapper = styled.div<IMobile>`
//   padding-left: 10px;
//   margin: ${({ isMobile }) => (isMobile ? '25px 0 0' : '25px 0')};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

import styled from 'styled-components';
import { colors } from '@ntm-package/theme';
import { IHeader, IMobile } from './types';

export const Wrapper = styled.div<IMobile>`
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  padding: ${({ isMobile }) => (isMobile ? '0 15px' : '0 80px')};
`;

export const SectionWrapper = styled.div<IMobile>`
  margin: ${({ isMobile }) => (isMobile ? '0 20px' : '0 80px')};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  //z-index: 1;
  justify-content: center;
  margin-top: 70px;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1560px;
  width: 100%;
  height: 100%;

  & >:nth-last-child(2) { background: ${colors.accentBackground} !important; }
  & >:nth-child(2n+2) { background: ${colors.secondaryBackground} }
`;

export const Header = styled.div<IHeader>`
  display: ${({ isShowHeader }) => (isShowHeader ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  justify-content: center;
  top: ${({ isShowHeader }) => (isShowHeader ? 0 : '-70px')};
  height: 70px;
  z-index: 2;
  background: ${colors.secondary};
`;

export const Footer = styled.footer`
  display: flex;
  height: 50px;
  flex-shrink: 0;
  background: ${colors.basicColors.WHITE};
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  
  svg {
    width: 50px;
    height: 50px;
    outline: none;
    fill: ${colors.iconActivePrimaryColor};
  }
`;

export const ScrollLinkWrapper = styled.div`
  & > a {
    text-decoration: none;

    &:link, &:visited, &:hover, &:active  {
      color: inherit;
    }
  }
`;

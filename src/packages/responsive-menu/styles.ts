import styled from 'styled-components';
import { colors } from '@ntm-package/theme';
import { IHamburgerButton } from '../../assets/icons/HamburgerButtonIcon';
import { IMenu } from './types';

export const Menu = styled.div<IMenu>`
  display: flex;
  position: relative;
  align-items: center;
  height: 90%;
  margin-left: 15%;
  text-align: center;
  
  & > a {
    text-decoration: none;

    &:link, &:visited, &:hover, &:active  {
      color: inherit;
    }
  }
  
  ${({ isMobile }) => isMobile && `
    flex-direction: column;
    margin-left: 0;
  `};
`;

export const MobileMenuWrapper = styled.div`
  position: absolute;
  padding-bottom: 10px;
  top: 70px;
  width: 100%;
  z-index: 2;
  height: 100vh;
  border-top: 1px solid ${colors.primaryBorderColor};
  background: ${colors.basicColors.WHITE};
`;

export const HamburgerButtonWrapper = styled.div<IHamburgerButton>`
  display: flex;
  padding: 10px;

  svg {
    flex: 1;
    width: 30px;
    height: 30px;
    outline: none;
    fill: ${({ isActive }) => (isActive
    ? colors.iconActivePrimaryColor
    : colors.iconSecondaryColor)};
  }`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding: 3px 10px;
  height: 100%;
  
  :hover {
    font-weight: 400;
    color: ${colors.basicColors.BLACK}
  }
`;

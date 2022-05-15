import styled from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import { DeviceType } from '@ntm-package/app/types';
import { IHamburger } from './types';

const {
  colors,
  size,
  transition,
} = appTheme;

export const Header = styled.header`
  background: ${colors.background.primary};
`;

interface IDeviceType {
  deviceType: DeviceType
}

export const Navigation = styled.nav<IDeviceType>`
  position: relative;
  padding: 9px 20px;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ deviceType }) => `${size.fontSize.navbar[deviceType]}`}
`;

export const Toggle = styled.div`
  align-self: center;
  max-height: 38px;
  cursor: pointer;
`;

export const HamburgerButton = styled.div<IHamburger>`
  width: 25px;
  height: 25px;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: ${colors.background.darkBlue};
    transition: ${({ isActive }) => (isActive
    ? 'top 0.2s ease-in-out, transform 0.4s ease-in-out 0.2s, opacity 0.1s ease-in-out 0.2s'
  // eslint-disable-next-line max-len
    : 'top 0.2s ease-in-out 0.4s, transform 0.4s ease-in-out, opacity 0.2s ease-in-out 0.2s, left 0.2s ease-in-out'
  )};

    &:nth-child(1) {
      top: 0;
      ${({ isActive }) => isActive && `
        transform-origin: center;
        transform: rotateY(90deg)
      `}
    }

    &:nth-child(2), &:nth-child(4) {
      top: 12.5px;
      ${({ isActive }) => isActive && `
        transform: rotate(45deg)
      `}
    }

    &:nth-child(3) {
      top: 24px;
      ${({ isActive }) => isActive && `
        transform-origin: center;
        transform: rotateY(90deg)
      `}
    }

    &:nth-child(4) {
      ${({ isActive }) => isActive && `
        transform: rotate(-45deg)
      `}
    }
  }
`;

// TODO research and add transition
export const MenuContent = styled.div<IDeviceType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
  background: ${colors.background.primary};

  a {
    position: relative;
    padding: 0.5625rem 10.3125rem;
    color: ${colors.textColor.primary};
    font-size: ${({ deviceType }) => `${size.fontSize.navbar[deviceType]}`};

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const LinksWrapper = styled.div`
  text-transform: uppercase;

  a {
    position: relative;
    color: ${colors.textColor.primary};

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: ${colors.textColor.accent}
        // transition: ${transition.textColor};
      //transition: color 0.4s ease 0s;
    }
  }
`;

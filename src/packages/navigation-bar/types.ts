import { ReactNode } from 'react';

export interface IMenuItem {
  id: number | string;
  key: string;
  title: string
  link: string
}

export interface INavigationBarProps {
  isMobile: boolean;
  logo: ReactNode;
  menuItems: IMenuItem[]
}

export interface IHamburger { isActive: boolean }

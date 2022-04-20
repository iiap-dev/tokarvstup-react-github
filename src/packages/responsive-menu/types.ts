import { SectionType } from '@ntm-package/app/types';

export interface IResponsiveMenuProps {
  isMobile?: boolean;
}

export interface IMenuItem {
  id: number | string;
  key: SectionType;
  value: string
  link: string
}

export interface IMenu { isMobile?: boolean }

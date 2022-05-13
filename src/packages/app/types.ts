import { PayloadAction } from '@reduxjs/toolkit';

// DATA
interface IWindowSize {
  innerWidth: number;
  innerHeight: number;
}

export type SectionType = 'home'
  | 'instructor'
  | 'dates'
  | 'workshop'
  | 'meeting'
  | 'partners'
  | 'contact';

export type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'laptopLarge';

// STORE
export interface IAppState {
  isReady: boolean;
  deviceType: DeviceType;
  isMobile: boolean;
  windowSize: IWindowSize;
  currentSection: SectionType;
}

export interface IStoreWithAppState {
  app: IAppState;
}

// ACTION
export type SetWindowSizeAction = (
  PayloadAction<IWindowSize>
);

export type SetCurrentSectionAction = (
  PayloadAction<SectionType>
)

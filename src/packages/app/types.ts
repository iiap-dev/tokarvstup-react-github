import { PayloadAction } from '@reduxjs/toolkit';

// DATA
interface IWindowSize {
  innerWidth: number;
  innerHeight: number;
}

// export interface SectionType {} 'home'
//   | 'instructor'
//   | 'dates'
//   | 'workshop'
//   | 'meeting'
//   | 'partners'
//   | 'contact';

// interface ISection {
//   [section: string]: string
// }

export type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'laptopLarge';

// STORE
export interface IAppState {
  isReady: boolean;
  deviceType: DeviceType;
  isMobile: boolean;
  windowSize: IWindowSize;
  // eslint-disable-next-line no-inline-comments
  currentSection: string; // add unique type
}

export interface IStoreWithAppState {
  app: IAppState;
}

// ACTION
export type SetWindowSizeAction = (
  PayloadAction<IWindowSize>
);

export type SetCurrentSectionAction = (
  PayloadAction<string>
)

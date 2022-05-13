import { createAction, createSlice } from '@reduxjs/toolkit';
import { getDevice } from '../utils/getDevice';
import { IAppState, SetCurrentSectionAction, SetWindowSizeAction } from './types';

const initialState: IAppState = {
  isReady: false,
  deviceType: 'mobile',
  isMobile: true,
  windowSize: {
    innerWidth: 0,
    innerHeight: 0,
  },
  currentSection: 'home',
}

const STORE_NAME = 'app'

export const appStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    startInit: (state: IAppState) => state,
    finishInit: (state: IAppState) => {
      state.isReady = true;
    },
    setWindowSize: (state: IAppState, action: SetWindowSizeAction) => {
      state.windowSize = action.payload;
      state.deviceType = getDevice(action.payload.innerWidth)
      state.isMobile = !(action.payload.innerWidth >= 1024)
    },
    setCurrentSection: (state: IAppState, action: SetCurrentSectionAction) => {
      state.currentSection = action.payload;
    },
  },
})

export const APP_START_INIT = `${STORE_NAME}/startInit`;
export const APP_FINISH_INIT = `${STORE_NAME}/finishInit`;

export const appActions = {
  startInit: createAction(APP_START_INIT),
  finishInit: createAction(APP_FINISH_INIT),
  setWindowSize: appStore.actions.setWindowSize,
  setCurrentSection: appStore.actions.setCurrentSection,
};

export const appReducer = appStore.reducer;

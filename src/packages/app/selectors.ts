import { IAppState, IStoreWithAppState } from './types';

export const appSelector = (
  state: IStoreWithAppState,
): IAppState => state.app;

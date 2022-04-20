import { combineReducers } from 'redux';
import { appReducer } from './store';

export const rootReducer = combineReducers({
  app: appReducer,
})

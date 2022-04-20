import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loggerMiddleware from './middleware/logger';
import createSagaMiddleware from 'redux-saga'
import {watchApp} from "./saga";
import {rootReducer} from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState){
  // const middlewares = [loggerMiddleware ,sagaMiddleware];
  // const middlewareEnhancer = applyMiddleware(...middlewares);
  //
  // const enhancers = [middlewareEnhancer];
  // const composedEnhancers = composeWithDevTools(...enhancers);
  //
  // const store = createStore(rootReducer, preloadedState, composedEnhancers)

  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, sagaMiddleware, ...getDefaultMiddleware()],
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  sagaMiddleware.run(watchApp);

  return store;
}

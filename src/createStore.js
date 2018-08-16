import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import isClient from './isClient';
import rootSaga from './rootSaga';
import { loaderReducer } from './components';

const reducer = combineReducers({
  loaderReducer,
});

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  if (isClient) sagaMiddleware.run(rootSaga);
  return store;
};


export default createStore;

import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import { fontLoadReducer } from './components';

const reducer = combineReducers({
  fontLoadReducer,
});

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};


export default createStore;

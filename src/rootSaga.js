import { all } from 'redux-saga/effects';
import { loaderSaga } from './components';

export default function* rootSaga() {
  yield all([
    loaderSaga(),
  ]);
}

import { all } from 'redux-saga/effects';
import { fontLoadSaga } from './components';

export default function* rootSaga() {
  yield all([
    fontLoadSaga(),
  ]);
}

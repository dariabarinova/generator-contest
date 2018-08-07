import { all } from 'redux-saga/effects';
import { fontLoadSaga } from './components';

// TODO:
// all(__CLIENT__ ? [
//   fontLoadSaga(),
// ] ; [])

export default function* rootSaga() {
  yield all([
    fontLoadSaga(),
  ]);
}

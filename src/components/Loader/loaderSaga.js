import { take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { markAppLoaded } from './loaderReducer';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function getOnAppLoadedEventChannel() {
  return eventChannel((emitter) => {
    window.addEventListener('load', emitter);

    return () => {
      window.removeEventListener('load', emitter);
    };
  });
}

export default function* watchOnAppLoaded() {
  const channel = yield getOnAppLoadedEventChannel();
  yield take(channel);
  yield delay(200);
  yield put(markAppLoaded());
  // yield put({ type: 'test' });
  channel.close();
}

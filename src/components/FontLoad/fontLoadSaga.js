import { take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { markFontLoaded } from './fontLoadReducer';

function getOnFontLoadEventChannel() {
  return eventChannel((emitter) => {
    document.fonts.addEventListener('loadingdone', emitter);

    return () => {
      document.fonts.removeEventListener('loadingdone', emitter);
    };
  });
}

export default function* watchOnFontsLoaded() {
  const channel = yield getOnFontLoadEventChannel();
  yield take(channel);
  yield put(markFontLoaded());
  channel.close();
}

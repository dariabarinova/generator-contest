import { take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { markFontLoaded } from './fontLoadReducer';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function getOnFontLoadEventChannel() {
  return eventChannel((emitter) => {
    const emit = () => {
      emitter('after load');
    };

    document.fonts.addEventListener('loadingdone', emit);

    document.fonts.ready.then(() => {
      emitter('ready promise');
    });

    const timeout = setTimeout(() => {
      emitter('timeout');
    }, 3000);

    return () => {
      document.fonts.removeEventListener('loadingdone', emit);
      clearTimeout(timeout);
    };
  });
}

export default function* watchOnFontsLoaded() {
  const channel = yield getOnFontLoadEventChannel();
  const type = yield take(channel);
  yield delay(100);
  yield put(markFontLoaded(type));
  channel.close();
}

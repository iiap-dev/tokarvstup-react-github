import { takeEvery, put } from 'redux-saga/effects'
import { APP_START_INIT, appActions } from './store';

export function* watchApp() {
  yield takeEvery(APP_START_INIT, handleStartInit);
}

function* handleStartInit() {
  try {
    yield put(appActions.finishInit())
  } catch (e) {
    console.error(e);
  }
}

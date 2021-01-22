import { all, fork } from 'redux-saga/effects';
import watchBusinessInfoSagas from './BusinessInfo/sagas';
import watchProductSagas from './Product/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchBusinessInfoSagas),
    fork(watchProductSagas),
  ])
}
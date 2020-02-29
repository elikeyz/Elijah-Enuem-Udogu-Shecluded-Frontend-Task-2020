import { all } from 'redux-saga/effects';
import { lotrWatcher } from './lotrSaga';

export default function* rootSaga() {
    yield all([
        lotrWatcher()
    ]);
}
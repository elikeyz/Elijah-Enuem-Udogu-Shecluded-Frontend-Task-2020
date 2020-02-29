import { all } from 'redux-saga/effects';
import { lotrWatcher } from './lotrSaga';
import { catsWatcher } from './catsSaga';

export default function* rootSaga() {
    yield all([
        lotrWatcher(),
        catsWatcher()
    ]);
}
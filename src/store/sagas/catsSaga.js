import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import dotenv from 'dotenv';
import { GET_CATS_STARTED, GET_CATS_SUCCESS, GET_CATS_FAILED } from '../constants';

dotenv.config();

function* catsSaga({ page }) {
    try {
        const { data } = yield call(axios.get, `${process.env.REACT_APP_CATS_BASE_URL}/v1/images/search?size=small&order=RANDOM&limit=24&page=${encodeURIComponent(page)}`, {
            headers: { 'x-api-key': process.env.REACT_APP_CATS_API_KEY }
        });
        yield put({ type: GET_CATS_SUCCESS, cats: data, page });
    } catch(error) {
        yield put({ type: GET_CATS_FAILED, error });
    }
}

export function* catsWatcher() {
    yield takeLatest(GET_CATS_STARTED, catsSaga);
}
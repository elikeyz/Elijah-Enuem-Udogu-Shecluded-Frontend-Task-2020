import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import dotenv from 'dotenv';
import { GET_LOTR_STARTED, GET_LOTR_SUCCESS, GET_LOTR_FAILED } from '../constants';

dotenv.config();

function* lotrSaga() {
    try {
        const { data: { docs } } = yield call(axios.get, `${process.env.REACT_APP_LOTR_BASE_URL}/v1/character`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`
            }
        });
        yield put({
            type: GET_LOTR_SUCCESS,
            data: docs
        });
    } catch(error) {
        yield put({
            type: GET_LOTR_FAILED,
            error
        })
    }
}

export function* lotrWatcher() {
    yield takeLatest(GET_LOTR_STARTED, lotrSaga);
}
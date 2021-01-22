import {
    put, call, takeLatest, all,
} from 'redux-saga/effects';
import axios from 'axios';
import { BUSINESS_INFO } from './types';
import { businessInfo } from './actions';
import * as config from "../utils/constants/index";

const apiUrl = config.API_V1_URL;
const apiKey = config.API_KEY;

function* handleGet() {
    try {

        const { data } = yield call(axios.get, `${apiUrl}/directory/api/business/0/`,
            {
                headers: {
                    'X-API-Key': `${apiKey}`,
                }
            });
        yield put(businessInfo.success({ data }))
    } catch (e) {
        yield put(businessInfo.failure({ error: { ...e } }))
    }
}

function* watchBusinessInfoSagas() {
    yield all([
        takeLatest(BUSINESS_INFO.GET, handleGet),
    ])
}

export default watchBusinessInfoSagas;
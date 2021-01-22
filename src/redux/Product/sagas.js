import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'
import axios from 'axios'

import { PRODUCT } from './types'
import { product } from './actions'
import * as config from "../utils/constants/index";

const apiUrl = config.API_V1_URL;
const apiKey = config.API_KEY;

function* handleGet() {
  try {

    const { data } = yield call(axios.get, `${apiUrl}/catalog/api/product/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* handleGetOne(action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.get, `${apiUrl}/catalog/api/product/${id}/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* handlePost(action) {
  try {
    const { saveData } = action.payload
    const { data } = yield call(axios.post, `${apiUrl}/catalog/api/product/${saveData}/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }, saveData
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* handlePut(action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.put, `${apiUrl}/catalog/api/product/${id}/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }, updateData
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* handlePatch(action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.patch, `${apiUrl}/catalog/api/product/${id}/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }, updateData
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* handleDelete(action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.delete, `${apiUrl}/catalog/api/product/${id}/`,
      {
        headers: {
          'X-API-Key': `${apiKey}`,
        }
      });
    yield put(product.success({ data }))
  } catch (e) {
    yield put(product.failure({ error: { ...e } }))
  }
}

function* watchProductSagas() {
  yield all([
    takeLatest(PRODUCT.GET, handleGet),
    takeLatest(PRODUCT.GET_ONE, handleGetOne),
    takeLatest(PRODUCT.SAVE, handlePost),
    takeLatest(PRODUCT.PUT, handlePut),
    takeLatest(PRODUCT.PATCH, handlePatch),
    takeLatest(PRODUCT.DELETE, handleDelete),
  ])
}

export default watchProductSagas

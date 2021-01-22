import { createAction } from '../utils'
import { PRODUCT } from './types'

export const product = {
  request: () => createAction(PRODUCT.GET, { fetching: true, success: false, error: null }),
  requestOne: id => createAction(PRODUCT.GET_ONE, {
    id, fetching: true, success: false, error: null,
  }),
  save: data => createAction(PRODUCT.SAVE, {
    ...data, fetching: true, success: false, error: null,
  }),
  put: (id, data) => createAction(PRODUCT.PUT, {
    id, ...data, fetching: true, success: false, error: null,
  }),
  patch: (id, data) => createAction(PRODUCT.PATCH, {
    id, ...data, fetching: true, success: false, error: null,
  }),
  delete: id => createAction(PRODUCT.DELETE, {
    id, fetching: true, success: false, error: null,
  }),
  success: data => createAction(PRODUCT.SUCCESS, {
    ...data, fetching: false, success: true, error: null,
  }),
  failure: error => createAction(PRODUCT.FAILURE, { ...error, fetching: false, success: false }),
}

import { createAction } from '../utils'
import { BUSINESS_INFO } from './types'

export const businessInfo = {
    request: () => createAction(BUSINESS_INFO.GET, { fetching: true, success: false, error: null }),
    success: data => createAction(BUSINESS_INFO.SUCCESS, {
        ...data, fetching: false, success: true, error: null,
    }),
    failure: error => createAction(BUSINESS_INFO.FAILURE, { ...error, fetching: false, success: false }),
}

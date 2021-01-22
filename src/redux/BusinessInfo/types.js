import { createActionTypes } from '../utils'

export const BUSINESS_INFO = createActionTypes('BUSINESS_INFO', [
  'GET',
  'SUCCESS',
  'FAILURE',
])

export default BUSINESS_INFO

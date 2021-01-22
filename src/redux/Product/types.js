import { createActionTypes } from '../utils'

export const PRODUCT = createActionTypes('PRODUCT', [
  'GET',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE',
])

export default PRODUCT

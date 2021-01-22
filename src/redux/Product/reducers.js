import { fromJS, List } from 'immutable'
import { PRODUCT } from './types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null,
})

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT.GET:
    case PRODUCT.GET_ONE:
    case PRODUCT.SAVE:
    case PRODUCT.UPDATE:
    case PRODUCT.DELETE:
    case PRODUCT.SUCCESS:
    case PRODUCT.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}

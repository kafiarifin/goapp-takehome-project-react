import { fromJS, List } from 'immutable'
import { BUSINESS_INFO } from './types'

const initialState = fromJS({
    data: List([]),
    fetching: false,
    success: false,
    error: null,
})

export default function businessInfoReducer(state = initialState, action) {
    switch (action.type) {
        case BUSINESS_INFO.GET:
        case BUSINESS_INFO.SUCCESS:
        case BUSINESS_INFO.FAILURE:
            return state.merge(action.payload)
        default:
            return state
    }
}

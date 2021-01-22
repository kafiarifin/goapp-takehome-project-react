import { createSelector } from 'reselect'

const businessInfoState = state => state.get('businessInfoData')

const businessInfoDataSelector = createSelector(
    businessInfoState,
    state => {
        const data = state.get('data')

        return data
    },
)

const fetchingSelector = createSelector(
    businessInfoState,
    state => state.get('fetching'),
)

const errorSelector = createSelector(
    businessInfoState,
    state => {
        const error = state.get('error')

        return error
    },
)
export {
    businessInfoDataSelector,
    fetchingSelector,
    errorSelector,
}
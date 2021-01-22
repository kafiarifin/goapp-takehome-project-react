import { createSelector } from 'reselect'

const productState = state => state.get('productData')

const productDataSelector = createSelector(
  productState,
  state => {
    const data = state.get('data')

    return data
  },
)

const fetchingSelector = createSelector(
  productState,
  state => state.get('fetching'),
)

const errorSelector = createSelector(
  productState,
  state => {
    const error = state.get('error')

    return error
  },
)
export {
  productDataSelector,
  fetchingSelector,
  errorSelector,
}

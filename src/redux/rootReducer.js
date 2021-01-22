import { combineReducers } from 'redux-immutable';
import businessInfoReducer from './BusinessInfo/reducers';
import productReducer from './Product/reducers';

const rootReducer = asyncReducers => combineReducers({
  businessInfoData: businessInfoReducer,
  productData: productReducer,
  ...asyncReducers,
})

export default rootReducer

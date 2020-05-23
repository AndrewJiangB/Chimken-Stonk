import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import stocksReducer from './stocksReducer';

export default combineReducers({
  search: searchReducer,
  stocks: stocksReducer
});

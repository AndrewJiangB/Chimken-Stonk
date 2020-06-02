import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import posts from './stocksReducer';

export default combineReducers({
  search: searchReducer,
  stocks: posts
});

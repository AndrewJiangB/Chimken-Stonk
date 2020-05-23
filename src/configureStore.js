import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(ReduxThunk, logger));

  return store;
}

export default configureStore;
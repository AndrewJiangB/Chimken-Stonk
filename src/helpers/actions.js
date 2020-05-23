import actionTypes from './actionTypes';

export const updateSearchAction = (query) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_ACTION_TYPE,
      payload: query
    })
  }
}
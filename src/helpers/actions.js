import actionTypes from './actionTypes';
import fetch from 'cross-fetch'

export const updateSearchAction = (query) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_ACTION_TYPE,
      payload: query
    })
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}


function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=br4b29nrh5r8ufeorhm0`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
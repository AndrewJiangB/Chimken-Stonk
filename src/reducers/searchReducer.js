const searchReducer = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
    case 'UPDATE_SEARCH':
      return action.payload;
  }
}

export default searchReducer;

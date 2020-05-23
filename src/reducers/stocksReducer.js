import getData from '../helpers/jsonParser';

// Haha... hahaha... stocks reducer
const initialState = [
  {name: 'Tesla', price: '5000+-999'},
  getData(),
  {name: 'Oil', price: '-40'}
];

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'UPDATE_STOCKS':
      return action.payload;
  }
}

export default stocksReducer;

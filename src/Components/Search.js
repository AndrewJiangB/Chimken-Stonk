import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchAction } from 'helpers/actions';

const Search = () => {
  const dispatch = useDispatch();

  return(
    <input
      type="text"
      className="input"
      id="addInput"
      placeholder="MONI IN DA BANK"
      onChange={(event) => {
        dispatch(updateSearchAction(event.target.value.toLowerCase()));
      }}
    />
  );
}

export default Search;

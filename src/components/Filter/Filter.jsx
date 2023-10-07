import React from 'react';
export const Filter = ({ inputValue, onFilter }) => {
  return (
    <React.Fragment>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        value={inputValue}
        onChange={evt => onFilter(evt.target.value)}
      ></input>
    </React.Fragment>
  );
};

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

/*
class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log(event.target.value);
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}
*/

// FUNCTIONAL COMPONENT

const SearchBar = (props) => {
  const handleUpdate = (event) => {
    props.searchFunction(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={handleUpdate}
    />
  );
};

export default SearchBar;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  handleUpdate = (event) => {
    // console.log(event.target.value);
    // Change the state of term
    const { searchFunction } = this.props;
    this.setState({
      term: event.target.value,
    });
    searchFunction(event.target.value);
  };

  /*
  componentWillMount() {
    console.log("SEARCH_BAR WILL MOUNT");
    // setInterval
  }

  componentDidMount() {
    console.log("SEARCH_BAR DID MOUNT");
  }

  // componentWillUnmount() {
  //   // clearInterval
  // }
  */

  // shouldComponentUpdate() {
  //   // return false;
  // }

  render() {
    // console.log("SEARCH_BAR RENDER");
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

// FUNCTIONAL COMPONENT
/*
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
*/

export default SearchBar;

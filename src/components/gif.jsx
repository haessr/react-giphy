/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    const { id, selectGif } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    // console.log("GIF RENDER");
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${id}/200.gif`;
    return <img src={src} alt="" className="gif" onClick={this.handleClick} />;
  }
}

// FUNCTIONAL COMPONENT

/*
const Gif = (props) => {
  if (!props.id) {
    return null;
  }

  const src = `https://media3.giphy.com/media/${props.id}/200.gif`;

  const handleClick = () => {
    if (props.selectGif) {
      props.selectGif(props.id);
    }
  };

  return <img src={src} alt="" className="gif" onClick={handleClick} />;
};
*/

export default Gif;

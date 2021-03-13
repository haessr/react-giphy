/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

/*
class Gif extends Component {
  handleClick = () => {
    const { selectGif } = this.props;
    const { id } = this.props;
    if (selectGif) {
      selectGif(id);
      console.log("clicked!");
    }
  };

  render() {
    const { id } = this.props;
    const src = `https://media3.giphy.com/media/${id}/100w.gif`;
    return <img src={src} alt="" className="gif" onClick={this.handleClick} />;
  }
}
*/

// FUNCTIONAL COMPONENT

const Gif = (props) => {
  const src = `https://media3.giphy.com/media/${props.id}/100w.gif`;

  const handleClick = () => {
    if (props.selectGif) {
      props.selectGif(props.id);
    }
  };

  return <img src={src} alt="" className="gif" onClick={handleClick} />;
};

export default Gif;

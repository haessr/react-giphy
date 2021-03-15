/* eslint-disable arrow-parens */
/* eslint-disable react/require-render-return */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Gif from "./gif";

/*
class GifList extends Component {
  renderList = () => {
    const { gifs } = this.props;
    const { selectGif } = this.props;
    return gifs.map((gif) => (
      <Gif id={gif.id} key={gif.id} selectGif={selectGif} />
    ));
  };

  render() {
    return <div className="gif-list">{this.renderList()}</div>;
  }
}
*/

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => (
        <Gif id={id} key={id} selectGif={selectGif} />
      ))}
    </div>
  );
};

export default GifList;

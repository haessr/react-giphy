/* eslint-disable arrow-parens */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "EiZQwKjFPDrYFnzrhA",
    };

    // this.search("homer thinking");
  }

  search = (query) => {
    // Call API
    giphy("WtL0RkU1kODAdgVboB5521elWBsojVuS").search(
      {
        q: query,
        rating: "g",
      },
      (error, result) => {
        // console.log(result.data);
        return this.setState({
          gifs: result.data,
        });
      }
    );
  };

  selectGif = (id) => {
    this.setState({
      selectedGifId: id,
    });
  };

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

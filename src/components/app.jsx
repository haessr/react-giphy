/* eslint-disable arrow-parens */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

const GIPHY_API_KEY = "WtL0RkU1kODAdgVboB5521elWBsojVuS";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null, //"EiZQwKjFPDrYFnzrhA",
    };

    // this.search("homer thinking");
  }

  search = (query) => {
    // Call API
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    // giphy("WtL0RkU1kODAdgVboB5521elWBsojVuS").search(
    //   {
    //     q: query,
    //     rating: "g",
    //   },
    //   (error, result) => {
    //     // console.log(result.data);
    //     return this.setState({
    //       gifs: result.data,
    //     });
    //   }
    // );
    fetch(giphEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data;
        this.setState({
          gifs: gifs,
        });
      });
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

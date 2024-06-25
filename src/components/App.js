import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";
import "./App.css";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artist: null, tracks: [] };
  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };
  // componentDidMount() {
  //   input("coldplay");
  // }

  onSearchClicked = (input) => {
    fetch(`${API_ADDRESS}/artist/${input}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => {
              this.setState({ tracks: json.tracks });
            })
            .catch((error) => alert(error.message));
        }
      });
  };
  handleKeyPress = (event) => {
    if (event.target.value === "Enter") {
      this.onSearchClicked();
    }
  };
  render() {
    console.log("this.state", this.state);
    return (
      <div class="body">
        <h2 class="heading">Music Master</h2>
        <Search onSearchClicked={this.onSearchClicked} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks}></Tracks>
      </div>
    );
  }
}

export default App;

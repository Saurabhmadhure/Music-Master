import React, { Component } from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { input: "", artist: null, tracks: [] };
  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  onSearchClicked = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.input}`)
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
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateInput}
          type="text"
          onKeyDown={this.handleKeyPress}
          placeholder="Enter the music name"
        />
        <button onClick={this.onSearchClicked}>Search</button>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks}></Tracks>
      </div>
    );
  }
}

export default App;

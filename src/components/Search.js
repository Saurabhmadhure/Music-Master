import { Box } from "@mui/material";
import React, { Component } from "react";
import "./Search.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
class Search extends Component {
  state = { input: null, track: [] };
  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.target.value === "Enter") {
      this.onSearchClicked({ input: event.taarget.value });
    }
  };
  onSearchClicked = () => {
    this.props.onSearchClicked(this.state.input);
  };

  render() {
    return (
      <Box class="search">
        <input
          onChange={this.updateInput}
          type="text"
          class="search__input"
          onKeyDown={this.handleKeyPress}
          placeholder="Enter the music name"
        />
        <button
          type="button"
          class="search__button"
          onClick={this.onSearchClicked}>
          <SearchOutlinedIcon />
        </button>
      </Box>
    );
  }
}
export default Search;

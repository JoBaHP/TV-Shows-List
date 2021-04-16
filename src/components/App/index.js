import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro";
import Series from "../../containers/Series";
import "whatwg-fetch";

class App extends Component {
  state = {
    series: [],
  };
  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=girls").then((response) =>
      response.json().then((json) => this.setState({ series: json }))
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Intro message="Here you can find all your TV Shows!" />

        <Series />
      </div>
    );
  }
}

export default App;

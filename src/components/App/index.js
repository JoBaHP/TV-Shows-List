import React, { Component } from "react";
import "./App.css";
import Series from "../../containers/Series";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV SHOWS LIST</h1>
        </header>

        <Series />
      </div>
    );
  }
}

export default App;

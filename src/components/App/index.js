import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Main";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV SHOWS LIST</h1>
        </header>

        <Main />
      </div>
    );
  }
}

export default App;

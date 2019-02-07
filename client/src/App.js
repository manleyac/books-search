import React, { Component } from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Books />
      </div>
    );
  }
}

export default App;

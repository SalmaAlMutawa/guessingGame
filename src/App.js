import React, { Component } from "react";
import "./App.css";

import Numb from "./Numb";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-responsive App-header ">
          <div className="row">
            <h2
              style={{
                color: "indigo",
                position: "center",
                fontFamily: "fantasy"
              }}
            >
              Guessing Game
            </h2>
          </div>
          <div className="row">
            <Numb />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

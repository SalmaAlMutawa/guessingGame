import React, { Component } from "react";

class WinPg extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h4
            style={{
              color: "indigo",
              position: "center",
              fontFamily: "cursive"
            }}
          >
            You guessed it RIGHT!
          </h4>
        </div>
      </div>
    );
  }
}

export default WinPg;

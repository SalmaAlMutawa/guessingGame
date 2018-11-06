import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Numb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: "",
      randNumber: Math.floor(Math.random() * 100) + 1,
      i: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.decrementi = this.decrementi.bind(this);
  }
  decrementi() {
    const newi = this.state.i - 1;
    this.setState({ i: newi });
  }
  handleChange() {
    let rem = 100 - this.state.randNumber;
    if (this.state.userNumber === "") {
      return "";
    } else if (this.state.userNumber == this.state.randNumber) {
      return "You guessed it RIGHT!";
    } else if (this.state.userNumber > this.state.randNumber) {
      return "Your guess is too high!";
    } else if (this.state.userNumber < this.state.randNumber) {
      return "Your guess is too low!";
    }
  }
  render() {
    console.log(`Random Numb: ${this.state.randNumber}`);
    console.log(`User guess: ${this.state.userNumber}`);

    while (this.state.i > 0) {
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
              Guess a number between 1-100
            </h4>
          </div>
          <div className="row">
            <h4
              style={{
                color: "indigo",
                position: "center",
                fontFamily: "cursive"
              }}
            >
              You have {this.state.i} attempts remaining!
            </h4>
          </div>
          <div className="row">
            <div className="form-group col-lg-8 col-12 mx-auto">
              <div className="input-group my-3">
                <input
                  className="form-control"
                  type="text"
                  onChange={number =>
                    this.setState({ userNumber: number.target.value })
                  }
                />
                <div className="input-group-append" />
              </div>
            </div>

            <div className="col-lg-8" />
            <button
              className="btn btn-lg btn-outline-success btn-block"
              onClick={this.decrementi}
            >
              Guess
            </button>
          </div>
          <div className="row">
            <h4
              style={{
                color: "indigo",
                position: "center",
                fontFamily: "cursive"
              }}
            >
              {this.handleChange()}
            </h4>
          </div>
        </div>
      );
    }
    return (
      <h3
        style={{ color: "indigo", position: "center", fontFamily: "cursive" }}
      >
        Game Over!
      </h3>
    );
  }
}

export default Numb;

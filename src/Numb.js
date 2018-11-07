import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WinPg from "./WinPg";

class Numb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: "",
      randNumber: Math.floor(Math.random() * 100) + 1,
      message: "",
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
    this.decrementi();
    let newMessage;
    if (this.state.userNumber === "") {
      newMessage = "";
    } else if (this.state.userNumber == this.state.randNumber) {
      newMessage = <WinPg />;
    } else if (this.state.userNumber > this.state.randNumber) {
      newMessage = "Your guess is too high!";
    } else if (this.state.userNumber < this.state.randNumber) {
      newMessage = "Your guess is too low!";
    }
    this.setState({ message: newMessage });
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
              onClick={() => this.handleChange()}
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
              {this.state.message}
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

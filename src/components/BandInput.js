// Add BandInput component
import React, { Component } from "react";
import { addBand } from "../actions/index";
import { connect } from "react-redux";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleOnChange = e => {
    console.log(this.state);
    this.setState({ text: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.addBand({ name: this.state.text });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addBand },
)(BandInput);

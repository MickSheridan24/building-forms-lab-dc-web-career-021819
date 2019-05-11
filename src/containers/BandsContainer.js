import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  displayBands = () => {
    return this.props.bands.map(b => {
      return <li>{b.name}</li>;
    });
  };
  render() {
    return (
      <div>
        <BandInput />
        <ul>{this.displayBands()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bands: state.bands };
}
export default connect(mapStateToProps)(BandsContainer);

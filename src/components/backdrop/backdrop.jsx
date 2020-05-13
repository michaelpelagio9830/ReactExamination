import React, { Component } from "react";
import "./backdrop.css";
class BackDrop extends Component {
  render() {
    return <div className="backdrop" onClick={this.props.onclickBackDrop} />;
  }
}

export default BackDrop;

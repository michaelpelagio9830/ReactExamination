import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" onClick={this.props.onClickDrawer}>
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/dashboard">
            React Exam Web Application
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;

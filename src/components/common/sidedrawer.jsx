import React, { Component } from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  render() {
    return (
      <nav className="side-drawer">
        <div className="header">
          <span className="spacer"></span>
          <span className="chevron left"></span>
        </div>
        <div className="divider">
          <ul>
            <Link to="/dashboard">
              <li>
                <button className="btn btn-light w-100">Home</button>
              </li>
            </Link>

            <li>
              <button className="btn btn-light w-100">Tables</button>
            </li>

            <li>
              <button className="btn btn-light w-100">Messages</button>
            </li>
          </ul>
        </div>
        <li>
          <Link to="/">
            <button className="btn btn-light w-100">Logout</button>
          </Link>
        </li>
      </nav>
    );
  }
}

export default SideDrawer;

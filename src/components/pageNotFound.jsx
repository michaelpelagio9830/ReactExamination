import React, { Component } from "react";
// import Header from "./header";
import error404 from "../images/404.jpg";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div
          className="App"
          style={{
            position: "fixed",
            top: "110px",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        >
          <div className=" text-center align-middle">
            <img
              src={error404}
              style={{
                display: "block",
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            />
            <div className="m-1">
              <div className="lead p-2">Error 404 page not found</div>
              <Link to="/dashboard">
                <button className="btn btn-warning rounded-pill">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageNotFound;

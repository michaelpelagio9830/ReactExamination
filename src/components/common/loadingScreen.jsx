import React, { Component } from "react";

class Loading extends Component {
  // state = {  }
  render() {
    return (
      <div className="center">
        <i className="fa fa-cog fa-spin fa-7x " />
      </div>
    );
  }
}

export default Loading;

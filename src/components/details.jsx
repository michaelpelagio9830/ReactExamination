import React, { Component } from "react";
import "./details.css";

class Details extends Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          {data.map((item) => (
            <div className="col-sm-3 mb-2" key={item.id}>
              <div className="card bg-light" style={{ maxWidth: "18rem" }}>
                <div className="card-header font-weight-bold">{item.title}</div>
                <div className="card-body">
                  <p className="card-text">{item.body}</p>
                  <button
                    className="btn btn-danger rounded-pill"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Details;

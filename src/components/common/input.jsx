import React, { Component } from "react";

class Input extends Component {
  render() {
    const {
      name,
      label,
      type,
      value,
      placeholder,
      error,
      onChange,
      dataSelect,
    } = this.props;
    // console.log(dataSelect);
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>

        {type === "drop-down" ? (
          <select
            className="custom-select"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            className="form-control"
          >
            <option>Choose...</option>
            {dataSelect.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            value={value}
            name={name} //ito para sa object
            onChange={onChange}
            type={type}
            className="form-control"
            placeholder={placeholder}
          />
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;

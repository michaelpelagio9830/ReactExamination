import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import "../index.css";

class Login extends Form {
  state = {
    accountStatic: { email: "abcd1234@gmail.com", password: "12345678" },
    data: { email: "", password: "" },
    errors: {},
    loginErrors: "",
  };
  schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    const { accountStatic, data } = this.state;
    if (accountStatic.email === data.email) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ loginErrors: "Wrong username or password " });
    }

    console.log("submit");
  };

  render() {
    const { email, password } = this.state.data;
    const { loginErrors } = this.state;

    return (
      <div className="container mt-5">
        <h1>Login</h1>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            label="Email:"
            placeholder="Email"
            type="text"
            value={email}
            error={this.state.errors.email}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            label="Password:"
            type="password"
            placeholder="Password"
            value={password}
            error={this.state.errors.password}
            onChange={this.handleChange}
          />

          <div className="mb-2">
            <span className="text-danger ">
              {loginErrors ? loginErrors : ""}
            </span>
          </div>

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

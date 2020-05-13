import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };

    const result = Joi.validate(this.state.data, this.schema, options);
    // console.log(result); ito yung nirereturn ni Joi na object need mo lang i map
    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
    // console.log(result);
    // const errors = {};
    // const { data } = this.state;

    // if (data.username.trim() === "")
    //   errors.username = "User Name is required!";
    // if (data.password.trim() === "")
    //   errors.password = "Password is required!";
    // // console.log(Object.keys(errors))//dito kinukuha nya yung Object ng errors
    // return Object.keys(errors).length === 0 ? null : errors; //dito kinukuha nya yung Object ng errors
  };

  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const subSchema = { [input.name]: this.schema[input.name] };
    const result = Joi.validate(obj, subSchema);
    return result.error ? result.error.details[0].message : null;
    // if (error) return null;
    // return error.details[0].message;
  };
  handleSubmit = (e) => {
    e.preventDefault(); //ito purpose neto para di mag reload yung page
    //error na kapag walang nilagay dun sa input field
    // console.log(e.currentTarget);
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // console.log(errors);

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // this is destructured from e.currentTarget
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    // console.log(errorMessage);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
}

export default Form;

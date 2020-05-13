import React, { Component } from "react";
import NavBar from "./common/navBar";
import Input from "./common/input";
import Form from "./common/form";
import SideDrawer from "./common/sidedrawer";
import BackDrop from "./backdrop/backdrop";
import Joi from "joi-browser";
// import { withRouter } from "react-router";
import { Redirect, Link } from "react-router-dom";

class AddForm extends Form {
  state = {
    data: { title: "", body: "" },
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("Title"),
    body: Joi.string().required().label("Body"),
  };
  doSubmit = () => {
    //call the server
    const { title, body } = this.state.data;
    this.props.onAddItems(title, body);

    // <Redirect to="/dashboard" />;
    // console.log("submit");
  };

  render() {
    const { title, body } = this.state.data;

    const { sideDrawerOpen, onBackDropClick, onDrawerClick } = this.props;

    let sideDrawer;
    let backDrop;

    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop onclickBackDrop={() => onBackDropClick()} />;
    }
    console.log(this.props.history);
    return (
      <React.Fragment>
        <NavBar onClickDrawer={onDrawerClick} />
        {sideDrawer}
        {backDrop}
        <div className="container mt-4">
          <h1>Add form</h1>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <Input
              name="title"
              label="Title:"
              placeholder="Title"
              type="text"
              value={title}
              error={this.state.errors.title}
              onChange={this.handleChange}
            />
            <Input
              name="body"
              label="Body:"
              placeholder="Body"
              type="text"
              value={body}
              error={this.state.errors.body}
              onChange={this.handleChange}
            />
            {/* <Link to="/dashboard"> */}
            <button disabled={this.validate()} className="btn btn-primary">
              Submit
            </button>
            {/* </Link> */}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddForm;

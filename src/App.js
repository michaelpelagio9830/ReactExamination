import React, { Component } from "react";
import Login from "./components/loginForm";
import DashBoard from "./components/dashboard";
import PageNotFound from "./components/pageNotFound";
import AddForm from "./components/addForm";
// import Loading from "./common/loadingScreen";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
const ApiEndPoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  // state = {  }
  state = {
    sideDrawerOpen: false,
    data: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(ApiEndPoint);
    // console.log(data);
    this.setState({ data });
  }

  handleAddItems = async (title, body) => {
    const obj = { title, body };
    const { data: post } = await axios.post(ApiEndPoint, obj);
    const data = [post, ...this.state.data];
    this.setState({ data });
    console.log("submit!");
  };
  handleDeleteItems = (dataId) => {
    const data = this.state.data.filter((data) => data.id !== dataId);
    this.setState({ data });
    // console.log("delete!");
  };

  handleDrawerClick = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { data, sideDrawerOpen } = this.state;
    return (
      <Switch>
        <Route path="/dashboard/additems" exact>
          <AddForm
            sideDrawerOpen={sideDrawerOpen}
            onDrawerClick={this.handleDrawerClick}
            onBackDropClick={this.handleBackDropClick}
            onAddItems={this.handleAddItems}
          />
        </Route>
        <Route path="/dashboard">
          <DashBoard
            data={data}
            sideDrawerOpen={sideDrawerOpen}
            onDeleteItems={this.handleDeleteItems}
            onDrawerClick={this.handleDrawerClick}
            onBackDropClick={this.handleBackDropClick}
          />
        </Route>

        <Route path="/login" component={Login} />
        <Route path="/pagenotfound" component={PageNotFound} />

        <Redirect from="/ReactExamination/" exact to="/login" />
        <Redirect from="/" exact to="/login" />
        <Redirect to="/pagenotfound" />
      </Switch>
    );
  }
}

export default App;

// class App extends Component {

//   return (
//     <Switch>
//       <Route path="/dashboard/additems" exact component={AddForm} />
//       <Route path="/dashboard" component={DashBoard} />

//       <Route path="/login" component={Login} />
//       <Route path="/pagenotfound" component={PageNotFound} />

//       <Redirect from="/" exact to="/login" />
//       <Redirect to="/pagenotfound" />
//     </Switch>
//   );
// }

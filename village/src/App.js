import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(({ data: smurfs }) => {
        this.setState({ smurfs });
      })
      .catch(err => console.log(err));
  }

  addSmurf = smurfs => {
    this.setState({ smurfs });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{ color: "purple", fontWeight: "bold" }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ color: "purple", fontWeight: "bold" }}
                to="/smurf-form"
              >
                Create Smurf
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          path="/"
          exact
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm addSmurf={this.addSmurf} {...props} />}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/smurf-form">Create Smurf</Link>
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

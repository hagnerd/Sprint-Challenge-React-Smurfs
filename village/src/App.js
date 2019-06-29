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

  addSmurf = (smurfs, redirect) => {
    axios
      .post("http://localhost:3333/smurfs", smurfs)
      .then(({ data: smurfs }) => this.setState({ smurfs }))
      .then(() => redirect("/"))
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(({ data: smurfs }) => this.setState({ smurfs }))
      .catch(err => console.log(err));
  };

  updateSmurf = (smurf, redirect, id) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(({ data: smurfs }) => this.setState({ smurfs }))
      .then(() => redirect("/"))
      .catch(err => console.log(err));
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
          render={props => (
            <Smurfs
              {...props}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm handleSubmit={this.addSmurf} {...props} />
          )}
        />

        <Route
          path="/smurf/:id/edit"
          exact
          render={props => {
            const smurf = this.state.smurfs.find(
              smurf => smurf.id === Number(props.match.params.id)
            );

            return (
              <SmurfForm
                handleSubmit={this.updateSmurf}
                name={smurf.name}
                age={smurf.age}
                height={smurf.age}
                id={props.match.params.id}
                {...props}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;

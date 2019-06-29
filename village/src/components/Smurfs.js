import React, { Component } from "react";
import { Link } from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="list">
          {this.props.smurfs.map(smurf => {
            return (
              <div className="card" key={smurf.id}>
                <Link to={`/smurf/${smurf.id}`}>
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                  />
                </Link>
                <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                  Delete Smurf
                </button>
                <button>
                  <Link to={`/smurf/${smurf.id}/edit`}>Edit Smurf</Link>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;

import React from "react";
import { Link } from "react-router-dom";
import Smurf from "./Smurf";

export default function SmurfPage({ smurf, deleteSmurf, history }) {
  return (
    <React.Fragment>
      <Smurf
        name={smurf.name}
        id={smurf.id}
        age={smurf.age}
        height={smurf.height}
      />
      <button onClick={() => deleteSmurf(smurf.id, history.push("/"))}>
        Delete Smurf
      </button>
      <button>
        <Link to={`/smurf/${smurf.id}/edit`}>Edit Smurf</Link>
      </button>
    </React.Fragment>
  );
}

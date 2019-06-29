import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
      <button>
        <Link to={`/smurf/${props.id}/edit`}>Edit Smurf</Link>
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

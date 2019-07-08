import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            activeClassName="nav-link--active"
            to="/smurf-form"
          >
            Create Smurf
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

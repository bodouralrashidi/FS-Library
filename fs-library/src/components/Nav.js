import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="nav">
        <NavLink className="navbar-brand" to="/">
          BN Library
        </NavLink>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/members-page">Members</NavLink>
      </div>
    </nav>
  );
}

export default Nav;

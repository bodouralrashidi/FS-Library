import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div class="nav">
        <div class="navbar-item">
          <NavLink to="/">BN Library</NavLink>
        </div>
        <div class="navbar-item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div class="navbar-item">
          <NavLink to="/members-page">Members</NavLink>
        </div>
        <div class="navbar-item">
          <NavLink to="/books-page">Books</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

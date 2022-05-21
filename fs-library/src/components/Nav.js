import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#3D348B",
              fontWeight: "bold",
              fontSize: "30px",
              marginRight: "50px",
              marginLeft: "20px",
              fontFamily: "",
            }}
            to="/"
          >
            Archive
          </NavLink>
        </div>
        <div>
          <NavLink className="navitem" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="navitem" to="/members-page">
            Members
          </NavLink>
        </div>
        <div>
          <NavLink className="navitem" to="/books-page">
            Books
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

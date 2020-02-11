import React from "react";

// Stateless functional components = no state property
const NavBar = ({ totalCounters }) => {
  // Destructing arguments - totalCounters
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="./">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

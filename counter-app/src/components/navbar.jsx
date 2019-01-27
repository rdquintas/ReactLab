import React, { Component } from "react";

// Stateless Functional Component
const NavBar = props => {
  // class NavBar extends Component {
  // render() {
  return (
    <nav className="navbar navbar-ligth bg-ligth">
      <a href="www.google.com" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
// }

export default NavBar;

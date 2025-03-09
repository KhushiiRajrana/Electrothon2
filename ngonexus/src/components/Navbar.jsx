import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">NgoNexus</h1>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/feed">Feed</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

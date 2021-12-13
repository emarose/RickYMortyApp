import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar mx-0 navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <h1 className="navbarBrand">Rick & Morty</h1>
        </Link>
        <button
          className="navbar-toggler bg-primary border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link ">Characters</NavLink>
            <NavLink to="/episodes" className="nav-link ">Episodes</NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location">
              Locations
            </NavLink>
            {/* 
            <div className="indicator"></div> */}
          </div>
          <div className="loginRegisterContainer">
            <Link to="/login" className="btn justify-content-end">Login</Link>
            <Link to="/register" className="btn justify-content-end">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="wrap navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ marginLeft: "25px" }}
          >
            OnlineShop
          </NavLink>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="/categories">
                Categories
              </NavLink>
            </li>
          </ul>
          <form className="navigation my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginLeft: "50px", marginRight: "5px" }}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="auth">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
              style={{ marginRight: "15px" }}
            >
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

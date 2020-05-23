import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import setImage from "../Background";

const PublicHeader = ({ authenticated }) => {
  useEffect(() => {
    setImage();
  }, []);

  const expand = (e) => {
    e.preventDefault();
    const clas = document.getElementById("myTopnav");
    if (clas.className === "elementnav") {
      clas.className += "responsive";
    } else clas.className = "elementnav";
  };

  return (
    <nav
      id="mainNav"
      className="navbar navbar-light navbar-expand-md navbar-expand-lg "
    >
      <div className="container">
        <a className="navbar-brand" href="/home">
          Brand
        </a>

        <div className="elementnav" id="myTopnav">
          <a href="#" className="icon " onClick={expand}>
            <span className="navbar-toggler-icon" />
          </a>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>

          {!authenticated && (
            <React.Fragment>
              <NavLink to="/aboutus" activeClassName="active">
                About Us
              </NavLink>
              <NavLink to="/contactus" activeClassName="active">
                Contact Us
              </NavLink>
            </React.Fragment>
          )}
          {authenticated ? (
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PublicHeader;

import React from "react";
import logo from "../src/images/logo.png";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
 
  return (
    <>
      <header>
        <nav className="d-flex navbar myNav" >
          <div className="logo">
            <img
              src={logo}
              alt="not found"
              style={{ width: "70px", height: "50px" }}
            />
          </div>
          <div className="d-flex justify-content-end menu ">
        
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
                
              to="/"
              
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/contact"
            >
              Contact
            </NavLink>
          
          </div>
        </nav>
      </header>
    </>
  );
}

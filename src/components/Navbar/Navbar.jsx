// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Assume you have some CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/compound"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Compound
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/render"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Render
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to={"/layout"} className={({isActive})=>(isActive ? 'active': '')}>
            Layout
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to={'/hoc'} className={({isActive})=>isActive ? 'active' : ''}>
            HOC
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

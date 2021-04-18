import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="customClass" to="/"> Home </NavLink>
            <NavLink exact activeClassName="active" className="customClass"  to="/about"> About Us </NavLink>
            <NavLink exact activeClassName="active" className="customClass"  to="/gallery"> Gallery </NavLink>
            <NavLink exact activeClassName="active"  className="customClass" to="/services"> Services </NavLink>
            <NavLink exact activeClassName="active" className="customClass"  to="/search"> Search </NavLink>
           
            <NavLink exact activeClassName="active" className="customClass"  to="/contact"> Contact Us </NavLink>
            <NavLink exact activeClassName="active" className="customClass"  to="/user"> User </NavLink>
         

          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

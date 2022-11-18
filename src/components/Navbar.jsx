import React from "react";
/* import { Link } from "react-router-dom"; */

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__container">
          <li className="navbar__link">
           {/*  <Link to="/">Home</Link> */}
           Home
          </li>

          <li className="navbar__link">
          {/*   <Link to="/Blog">Blog</Link> */}
          Blog
          </li>

          <li className="navbar__link">
           {/*  <Link to="/Servicios">Servicios</Link> */}
           Servicios
          </li>

          <li className="navbar__link">
       {/*      <Link to="/About">About</Link> */}
       About
          </li>

          <li className="navbar__link">
        {/*     <Link to="/Contact">Contact</Link> */}
        Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

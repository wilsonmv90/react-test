import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__container">
          <Link className="navbar__link" to="/">
            Home
          </Link>

          <Link className="navbar__link" to="/blog">
            Blog
          </Link>

          <Link className="navbar__link" to="/services">
            Services
          </Link>

          <Link className="navbar__link" to="/about">
            About
          </Link>

          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
}

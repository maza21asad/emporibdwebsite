import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  const Hamburger = (
    <GiHamburgerMenu
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={toggleMenu}
    />
  );

  const Close = (
    <IoClose
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={toggleMenu}
    />
  );

  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            {/* <img src={RedexLogo} alt="Redex Logo" className="logo-svg" /> */}
          </NavLink>
        </div>

        {/* Desktop nagigation */}
        <nav className="desktopNav">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* -------------- Mobile Navigation ----------------*/}

        <nav className="mobileNav" style={{ display: click ? "flex" : "none" }}>
          <ul>
            <li>
              <NavLink to="/" className="nav-link" onClick={toggleMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="burger-menu">{click ? Close : Hamburger}</div>
      </div>
    </header>
  );
}

export default Navbar;

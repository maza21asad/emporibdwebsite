import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 870) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 870) {
      setDropdown(false);
    }
  };

  const handleDropdownClick = () => {
    if (window.innerWidth < 870) {
      setDropdown(!dropdown);
    }
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
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
            >
              <NavLink to="/services" className="nav-link">
                SERVICES <tr />
                <IoIosArrowDown className="downArrow" />
                <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                  <li>
                    <NavLink to="/fashion&jewellery" className="dropdown-link">
                      Fashion & Jewellery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/propertiesLtd" className="dropdown-link">
                      Properties Ltd
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/events" className="dropdown-link">
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/digitals" className="dropdown-link">
                      Digitals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tours&travels" className="dropdown-link">
                      Tours & Travels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/architects" className="dropdown-link">
                      Architects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/agro" className="dropdown-link">
                      Agro
                    </NavLink>
                  </li>
                </ul>
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
            {/* ------------------ */}
            <li onClick={handleDropdownClick}>
              <NavLink to="/services" className="nav-link">
                SERVICES
                <IoIosArrowDown className="downArrow" />
                {/* </NavLink> */}
                <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                  <li>
                    <NavLink
                      to="/fashion&jewellery"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Fashion & Jewellery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/propertiesLtd"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Properties Ltd
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/events"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/digitals"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Digitals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tours&travels"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Tours & Travels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/architects"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Architects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/agro"
                      className="dropdown-link"
                      onClick={toggleMenu}
                    >
                      Agro
                    </NavLink>
                  </li>
                </ul>
              </NavLink>
            </li>
            {/* ================ */}
          </ul>
        </nav>
        <div className="burger-menu">{click ? Close : Hamburger}</div>
      </div>
    </header>
  );
}

export default Navbar;

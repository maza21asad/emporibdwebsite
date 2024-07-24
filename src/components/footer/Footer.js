import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          {/* column 1 */}
          <div className="col">
            {/* <img src={RedexLogo} alt="Redex Logo" className="logo-redex" /> */}
            <h4>Empori BD</h4>
            <ul className="f-list">
              <li>+8801********9 </li>
              <li>Gulshan, </li>
              <li>Dhaka, Bangladesh </li>
            </ul>
            {/* <img src={Facebook} alt="Facebook icon" className="logo-fb" /> */}
          </div>
          {/* column 2 */}
          <div className="col">
            <h4> Quick Link </h4>
            <ul className="f-list">
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="footer-container-2">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear} All right reserved.
            </p>
            <p className="col-sm">
              Developed by:{" "}
              <NavLink className="developer" to="/">
                Asad
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

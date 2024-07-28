import React from "react";
import "./Services.css";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="serv1stDiv">
        <h4 className="servH4">Services</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br />
      </div>

      <div className="servDiv">
        <div className="serviceList">
          <NavLink to="/fashion&jewellery" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI FASHION & JEWELLERY</h4>

            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/propertiesLtd" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI PROPERTIES LTD</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/events" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI EVENTS</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/digitals" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI DIGITALS</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/tours&travels" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI TOURS & TRAVELS</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/architects" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI ARCHITECTS</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
          <NavLink to="/agro" className="servDetails">
            {/* <img className="servImg" /> */}
            <h4 className="servName">EMPORI AGRO</h4>
            <p className="servDesc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Services;

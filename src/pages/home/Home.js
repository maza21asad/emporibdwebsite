import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section id="intro">
        <div className="introContent">
          <span className="greeting">Hello, </span>
          <span className="introText">
            We are <span className="intoEmpori">Empori BD</span> <br /> Welcome
            to Empori BD
          </span>
          <p className="introPara">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <NavLink className="hireLink" to="/contact">
            <button className="hireMeBtn">Contact US</button>
          </NavLink>
        </div>
        {/* <img src={bgImg} alt="bgImg" className="bgImg"></img> */}
      </section>{" "}
      <h4>Welcome to Empori BD</h4> <br />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
        <br />
      </p>{" "}
      <br /> <br />
      <p>Dealership Opportunities</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <br /> <br />
      <p>Why Choose Us?</p>
      <br />
      <p>
        * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. <tr />
        * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. <tr />* Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. species.
      </p>
      <br /> <br />
      <p>Our Mission</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <br /> <br />
      <p>Get to Know Us</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <br /> <br />
      <p>Thank you for visiting Empori BD.</p>
    </div>
  );
}

export default Home;

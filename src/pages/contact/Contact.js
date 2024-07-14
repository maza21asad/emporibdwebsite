import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contactList">
        <h2 className="contactTitle">Contact Us</h2>
        <div className="infoLinks">
          <h3 className="infoHeader">Empori BD</h3>
          <span className="infoDetails">+8801********9</span>
          <span className="infoDetails"> Gulshan, </span>
          <span className="infoDetails"> Dhaka, Bangladesh</span>
          <a
            className="fblogo"
            href="www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={Facebook} alt="Facebook" class="fbLink" /> */}
          </a>
        </div>
        <p className="contactDesc">
          Fill out the form below to discuss any work opportunities.
        </p>
        {/* <form className="contactForm" ref={form} onSubmit={sendEmail}> */}
        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            // onChange={handleInputChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
            // onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="msg"
            rows="4"
            placeholder="Your message"
            // onChange={handleInputChange}
          />
        </form>
        <button
          type="submit"
          value="Send"
          className="submitBtn"
          // disabled={!isFormValid}
        >
          SUBMIT
        </button>
      </div>

      <div className="mapLocation">
        <iframe
          title="Empori BD Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35067.597290365055!2d90.3941146618215!3d23.793274713434077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720897246217!5m2!1sen!2sbd"
          width="500"
          height="480"
          // style="border:0;"
          // allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;

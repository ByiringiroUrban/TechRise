// File: ContactForm.js
import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Column: Contact Information */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
        Visit TechRise Rwanda at the ALX Hub in the
         Norskeen Innovation Center—a vibrant space
         fueling innovation and collaboration to advance
          our mission in technology and education. <a href="#">Download Now</a>.
        </p>
        <div className="info-box">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Address</h4>
              <p> 1 KN 78 St, Kigali</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Mail Us</h4>
              <p>techriserwanda@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>Telephone</h4>
              <p>(+250)786 062 005</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i>
            <div>
              <h4>Website</h4>
              <p>TechRise.com</p>
            </div>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="contact-form">
        <h2>Send Your Message</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your Phone" />
            <input type="text" placeholder="Your Project" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

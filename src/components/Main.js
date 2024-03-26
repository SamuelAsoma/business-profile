import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";


export default function Main() {
  return (
    <main className="main-container container">
       <div className="contact-links">
        <a href="mailto:samuel@gmail.com" className="contact-link email-link">
          <FaEnvelope className="icon" /> {/* Apply the icon class */}
          <span>Email</span> {/* Wrap text in a span for alignment */}
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" className="contact-link linkin-link">
          <FaLinkedin className="icon" /> {/* Apply the icon class */}
          <span>LinkedIn</span> {/* Wrap text in a span for alignment */}
        </a>
      </div>
    

      <section className="about-section">
        <h3 className="section-heading">About</h3>
        <p className="section-content">
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I'm always looking for new things to learn.
        </p>
      </section>

      <section className="interests-section">
        <h3 className="section-heading">Interests</h3>
        <p className="section-content">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </main>
  );
}

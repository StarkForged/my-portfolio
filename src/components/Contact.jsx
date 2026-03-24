import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container-fluid">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="contact__heading">
          Let's build something<br />
          <span>together.</span>
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <p className="contact__col-label">EMAIL</p>
            <a href="mailto:stark92005@gmail.com" className="contact__value">
              stark92005@gmail.com
            </a>
          </div>
          <div className="col-12 col-md-4">
            <p className="contact__col-label">PHONE</p>
            <a href="tel:+919518990151" className="contact__value">
              +91 95189 90151
            </a>
          </div>
          <div className="col-12 col-md-4">
            <p className="contact__col-label">SOCIAL</p>
            <div className="d-flex gap-4">
              <a
                href="https://linkedin.com/in/yogesh-vaishnav-6000822a1"
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/StarkForged"
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <span>© 2025 YOGESH VAISHNAV</span>
          <span>FULL-STACK DEVELOPER · AHMEDABAD, INDIA</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
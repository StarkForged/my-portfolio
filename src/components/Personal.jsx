import React from "react";

function Personal() {
  return (
    <section id="home" className="personal">
      {/* Navbar */}
      <nav className="personal__nav">
        <div className="personal__logo">Y.</div>
        <div className="personal__nav-right">
          <a href="#contact" className="personal__connect-btn">Connect With Me</a>
          <span className="personal__menu-icon">☰</span>
        </div>
      </nav>

      {/* Name */}
      <div className="personal__center">
        <p className="personal__subtitle">SOFTWARE DEVELOPER</p>
        <h1 className="personal__name">YOGESH VAISHNAV</h1>
      </div>

      {/* Bottom Info */}
      <div className="personal__bottom">
        <span>BASED IN AHMEDABAD, INDIA</span>
        <span>FULL-STACK & WEB TECHNOLOGIES</span>
        <span>MSC IT STUDENT</span>
      </div>
    </section>
  );
}

export default Personal;
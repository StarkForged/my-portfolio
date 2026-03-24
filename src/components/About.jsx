import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <p className="section-label">ABOUT ME</p>
        <h2 className="about__heading">
          I'm a <span>full-stack developer</span> with strong focus on building
          high quality &amp; impactful digital experiences.
        </h2>
        <p className="about__bio">
          I'm an MSc IT student at SKIPS University with a passion for breaking
          down complex problems and building meaningful solutions. I enjoy
          thinking beyond conventional approaches — from backend logic to smooth
          frontend experiences.
        </p>
        <div className="about__links">
          <a
            href="https://linkedin.com/in/yogesh-vaishnav-6000822a1"
            target="_blank"
            rel="noreferrer"
            //It prevents the new page from: Knowing where the user came from (no referrer) 
            // Accessing your page via window.opener (security risk)
            className="about__link"
          >
            LINKEDIN →
          </a>
          <a
            href="https://github.com/StarkForged"
            target="_blank"
            rel="noreferrer"
            className="about__link"
          >
            GITHUB →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
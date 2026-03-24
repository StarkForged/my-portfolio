import React, { useState } from "react";

const projects = [
  {
    name: "MEDICARE",
    sector: "HEALTHCARE / DJANGO",
    description:
      "A web-based nursing portal to manage nurse allocation between hospitals and agencies. Secure role-based access for Admin, Hospital, and Agency users.",
    tech: ["Django", "Tailwind CSS", "MySQL"],
    duration: "6 Months",
    role: "Team Leader (Team of 2)",
  },
  {
    name: "COLLEGE MANAGEMENT SYSTEM",
    sector: "EDUCATION / PHP",
    description:
      "Centralized system to manage student admissions, attendance, events, and result processing with secure academic data management.",
    tech: ["PHP", "MySQL"],
    duration: "6 Months",
    role: "Team Leader (Team of 4)",
  },
  {
    name: "OLX-LIKE CLASSIFIEDS PLATFORM",
    sector: "MARKETPLACE / REACT",
    description:
      "Full-stack marketplace for posting, browsing, and managing product listings. Includes RESTful APIs and a trust-based rating system.",
    tech: ["React", "Django REST Framework", "MongoDB"],
    duration: "Nov 2025 – Present",
    role: "Co-Developer (Team of 2)",
  },
  {
    name: "AYURVEDIC BOOKING SYSTEM",
    sector: "HEALTHCARE / NEXT.JS",
    description:
      "Digital appointment and booking platform for an Ayurvedic institute. Secured 3rd rank at Smart India Hackathon 2025 (College Round).",
    tech: ["React", "Next.js", "MySQL"],
    duration: "Hackathon Project",
    role: "🏆 3rd Rank – SIH 2025",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container-fluid">
        <p className="section-label">WHAT I'VE BUILT</p>
        <h2 className="section-title">Projects</h2>

        {/* Header row */}
        <div className="projects__table-header">
          <span className="projects__col-label">PROJECT</span>
          <span className="projects__col-label">SECTOR</span>
        </div>

        {/* Project Rows */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-row"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="project-row__main">
              <h3 className={`project-row__name ${hovered === i ? "project-row__name--active" : ""}`}>
                {project.name}
              </h3>
              <span className={`project-row__sector ${hovered === i ? "project-row__sector--active" : ""}`}>
                {project.sector}
              </span>
            </div>

            {/* Expandable detail */}
            <div className={`project-row__detail ${hovered === i ? "project-row__detail--open" : ""}`}>
              <div className="project-row__detail-inner">
                <p className="project-row__desc">{project.description}</p>
                <div className="project-row__meta">
                  <p className="project-row__role">
                    {project.role} · {project.duration}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
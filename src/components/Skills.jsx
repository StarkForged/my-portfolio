import React from "react";

const skillsData = [
  {
    label: "LANGUAGES",
    title: "Programming Languages",
    description: "Core languages I use to build logic, algorithms, and scalable systems.",
    tags: ["C", "C++", "Java", "Python"],
  },
  {
    label: "FRONTEND",
    title: "Frontend Technologies",
    description: "Building responsive, modern, and user-friendly interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "React", "Next.js"],
  },
  {
    label: "BACKEND",
    title: "Backend Technologies",
    description: "Developing server-side logic, APIs, and database-driven systems.",
    tags: ["PHP", "Django", "Django REST Framework", "Java Servlet", "JSP"],
  },
  {
    label: "DATABASE",
    title: "Database & Storage",
    description: "Designing and managing structured and unstructured data stores.",
    tags: ["MySQL", "MongoDB"],
  },
  {
    label: "TOOLS",
    title: "Tools & Platforms",
    description: "Development environment, version control, and deployment tools.",
    tags: ["VS Code", "NetBeans", "Apache Tomcat", "Git", "GitHub"],
  },
  {
    label: "CREATIVE",
    title: "3D & Design",
    description: "Creative skills in 3D modeling, VFX, and graphic design.",
    tags: ["Blender", "Autodesk Maya", "Graphics Design"],
  },
];

function SkillCard({ label, title, description, tags }) {
  return (
    <div className="skill-card">
      <p className="skill-card__label">{label}</p>
      <h3 className="skill-card__title">{title}</h3>
      <p className="skill-card__desc">{description}</p>
      <div className="skill-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container-fluid">
        <p className="section-label">WHAT I KNOW</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="row g-4">
          {skillsData.map((skill) => (
            <div key={skill.title} className="col-12 col-md-6 col-lg-4">
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
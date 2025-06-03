import React from "react";
import {a} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        style={{
          textAlign: "center",
          padding: "6rem 1rem",
          backgroundColor: "#f7fafc",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Hi, I'm Ankit Singh Rawat
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Web Developer specializing in Full Stack Development
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a to="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a to="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Technologies I Use</h2>
        <div className="tech-list" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span className="tech-item react">React</span>
          <span className="tech-item node">Node.js</span>
          <span className="tech-item mongo">MongoDB</span>
          <span className="tech-item typescript">TypeScript</span>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        style={{ padding: "4rem 1.5rem", backgroundColor: "#f9fafb" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          Featured Projects
        </h2>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div className="project-card" style={{ padding: "1.5rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.5rem" }}>Project 1</h3>
            <p>A short description of project 1 goes here.</p>
            <div className="project-as" style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <a to="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a to="#" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          <div className="project-card" style={{ padding: "1.5rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.5rem" }}>Project 2</h3>
            <p>A short description of project 2 goes here.</p>
            <div className="project-as" style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <a to="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a to="#" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="about" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          I’m a developer passionate about building fast and user-friendly web
          apps that solve real-world problems and deliver delightful user
          experiences.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          padding: "2rem 1rem",
          backgroundColor: "#edf2f7",
          textAlign: "center",
        }}
      >
        <div className="social-as" style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a to="https://github.com/ankit-rawat048" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a to="https://www.aedin.com" target="_blank" rel="noopener noreferrer">aedIn</a>
          <a to="mailto:your.email@example.com">Email</a>
        </div>
        <p>&copy; 2025 Ankit Singh Rawat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

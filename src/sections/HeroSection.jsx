import React from "react";
import { personalInfo } from "../data/portfolioData";
import { SystemVisualizer } from "../components/SystemVisualizer";
import { ArrowRight, Download, Terminal } from "lucide-react";

export function HeroSection() {
  const heroTechnologies = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Redis",
    "Docker",
    "Microservices",
    "CI/CD",
  ];

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div className="hero-badge">
                <Terminal size={14} />
                <span>Backend Developer | Node.js</span>
              </div>
              <div className="status-indicator-badge">
                <span className="status-dot"></span>
                <span>Open to Backend / Node.js Opportunities</span>
              </div>
            </div>

            <h1 className="hero-title">
              Building <span className="hero-title-accent">scalable</span> backend systems with Node.js.
            </h1>

            <p className="hero-subtitle">
              Backend Developer with 4+ years of experience building scalable APIs, backend services, microservices, real-time applications and automation solutions.
            </p>

            {/* Natural Tech Highlights */}
            <div className="hero-tech-pills" aria-label="Core Backend Technologies">
              {heroTechnologies.map((tech) => (
                <span key={tech} className="tech-tag highlight">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Vikas-Singh-Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-link" style={{ marginLeft: "0.5rem" }}>
                <span>Let's Connect</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Backend System Visualizer */}
          <div>
            <SystemVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}

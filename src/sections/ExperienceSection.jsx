import React from "react";
import { experiences } from "../data/portfolioData";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-label="Work Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">CAREER TRACK</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            4+ years delivering scalable backend services, process automation, and database optimizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-dot"></div>

              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-period">
                  <Calendar size={14} style={{ display: "inline-block", marginRight: "4px", verticalAlign: "middle" }} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="timeline-highlights">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="timeline-item">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag highlight" style={{ fontSize: "0.75rem" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

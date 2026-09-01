import React from "react";
import { experiences, education } from "../data/portfolioData";
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react";

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

        {/* Education Highlight Card */}
        {education && (
          <div style={{ maxWidth: "900px", margin: "2rem auto 0" }}>
            <div className="glass-card" style={{ padding: "1.75rem 2rem", borderLeft: "3px solid var(--accent-emerald)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-badge)",
                      color: "var(--accent-emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {education.degree}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                      {education.university}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
                      Score: {education.score}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      Graduated {education.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

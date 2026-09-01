import React from "react";
import { personalInfo, focusAreas } from "../data/portfolioData";
import { Zap, Layers, ShieldCheck, Code2, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const iconMap = {
    Zap: Zap,
    Layers: Layers,
    ShieldCheck: ShieldCheck,
    Code2: Code2,
  };

  const coreCompetencies = [
    "REST API Architecture & Design",
    "Microservices & Domain Separation",
    "Database Schema Design (MongoDB & MySQL)",
    "API Integrations & Webhooks",
    "Authentication & Authorization (JWT, RBAC)",
    "High-Performance Query & Cache Optimization",
    "Real-Time Applications (Socket.IO & WebSockets)",
    "Docker Containerization & CI/CD Pipelines",
    "Production Debugging & Observability",
  ];

  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ABOUT ME</span>
          <h2 className="section-title">
            Architecting reliable, high-performance backends
          </h2>
          <p className="section-subtitle">
            Focused on writing robust server-side logic, secure REST endpoints, and automated deployments.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Summary & Walmart Highlight */}
          <div className="about-text-card">
            <div className="glass-card">
              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {personalInfo.aboutDetailed}
              </p>

              <div className="walmart-highlight-box">
                <p>
                  <strong>Enterprise Experience:</strong> {personalInfo.walmartExperience}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                  Core Competencies:
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.4rem" }}>
                  {coreCompetencies.map((comp, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--accent-emerald)" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "What I focus on" */}
          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem" }}>
              What I Focus On
            </h3>
            <div className="focus-grid">
              {focusAreas.map((area, idx) => {
                const IconComp = iconMap[area.icon] || Zap;
                return (
                  <div key={idx} className="focus-card">
                    <div className="focus-icon">
                      <IconComp size={20} />
                    </div>
                    <div className="focus-title">{area.title}</div>
                    <div className="focus-desc">{area.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

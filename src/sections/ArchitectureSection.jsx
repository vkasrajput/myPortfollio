import React from "react";
import { architectureSteps } from "../data/portfolioData";
import { ShieldCheck, CheckSquare, AlertTriangle, FileText, Zap, TestTube, Box, GitMerge } from "lucide-react";

export function ArchitectureSection() {
  const architecturalPillars = [
    { name: "Authentication", icon: ShieldCheck, desc: "Stateless JWT verification & role-based middleware guards" },
    { name: "Input Validation", icon: CheckSquare, desc: "Strict schema sanitization before reaching business services" },
    { name: "Error Handling", icon: AlertTriangle, desc: "Standardized error envelopes preventing stack leaks" },
    { name: "Structured Logging", icon: FileText, desc: "JSON log entries with correlation IDs for tracing" },
    { name: "Caching Strategy", icon: Zap, desc: "Redis cache-aside with TTL invalidation on updates" },
    { name: "Automated Testing", icon: TestTube, desc: "Integration and unit test suites across critical routes" },
    { name: "Dockerized Isolation", icon: Box, desc: "Multi-stage lightweight images for uniform environments" },
    { name: "CI/CD Deployment", icon: GitMerge, desc: "Automated test-and-publish workflows via GitHub Actions" },
  ];

  return (
    <section id="architecture" className="section" aria-label="Backend Architecture">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">SYSTEM DESIGN</span>
          <h2 className="section-title">How I Build Backend Systems</h2>
          <p className="section-subtitle">
            A production-ready, layered architectural blueprint ensuring separation of concerns, high throughput, and zero-downtime reliability.
          </p>
        </div>

        {/* 6-Step Execution Pipeline */}
        <div className="architecture-pipeline">
          {architectureSteps.map((step, idx) => (
            <div key={idx} className="arch-step-card">
              <div className="arch-step-number">PHASE 0{idx + 1}</div>
              <h3 className="arch-step-title">{step.title}</h3>
              <p className="arch-step-desc">{step.desc}</p>
              <div className="arch-step-tech">
                {step.tech.map((t) => (
                  <span key={t} className="tech-tag" style={{ fontSize: "0.72rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Pillars Badges */}
        <div style={{ marginTop: "3.5rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem", textAlign: "center" }}>
            Backend Reliability Pillars
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {architecturalPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-badge)",
                        color: "var(--accent-emerald)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComp size={16} />
                    </div>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>
                      {pillar.name}
                    </strong>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

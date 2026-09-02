import React from "react";
import { engineeringExpertiseCards } from "../data/portfolioData";
import { CodeSnippet } from "../components/CodeSnippet";
import { Server, Database, Zap, Radio, ShieldCheck, GitBranch } from "lucide-react";

export function EngineeringSection() {
  const iconMap = {
    Server: Server,
    Database: Database,
    Zap: Zap,
    Radio: Radio,
    ShieldCheck: ShieldCheck,
    GitBranch: GitBranch,
  };

  return (
    <section id="engineering" className="section" aria-label="Engineering Expertise & Code Patterns">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CORE CAPABILITIES</span>
          <h2 className="section-title">Engineering Expertise</h2>
          <p className="section-subtitle">
            Battle-tested backend engineering practices for designing high-throughput, secure, and resilient microservices and APIs.
          </p>
        </div>

        {/* 6 Engineering Expertise Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {engineeringExpertiseCards.map((card, idx) => {
            const IconComp = iconMap[card.icon] || Server;
            return (
              <div key={idx} className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-badge)",
                      color: "var(--accent-emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                    {card.title}
                  </h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Subtitle for Code Snippets */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Implementation Patterns in Code
          </h3>
          <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
            Inspect real-world patterns for layer separation, Redis cache-aside, centralized error boundaries, and CI/CD pipelines.
          </p>
        </div>

        {/* Interactive Code Viewer with tab selector */}
        <CodeSnippet />
      </div>
    </section>
  );
}

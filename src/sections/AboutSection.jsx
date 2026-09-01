import React, { useState } from "react";
import { personalInfo, focusAreas } from "../data/portfolioData";
import { ImageViewModal } from "../components/ImageViewModal";
import { Zap, Layers, ShieldCheck, Code2, CheckCircle2, MapPin, Eye, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export function AboutSection() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

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
          {/* Left Column: Profile Card */}
          <div className="about-profile-card">
            <div
              className="about-img-wrapper"
              onClick={() => setIsPhotoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsPhotoOpen(true);
                }
              }}
              title="Click to view full size photo"
              aria-label="View full size profile photo"
            >
              <img
                src="/profile.png"
                alt="Vikas Singh - Backend Developer"
                className="about-profile-img"
              />
              <div className="about-img-overlay">
                <Eye size={18} />
                <span>View Photo</span>
              </div>
              <div className="about-img-status">
                <span className="status-dot"></span>
                <span>Open to Opportunities</span>
              </div>
            </div>

            <h3 className="about-profile-name">{personalInfo.name}</h3>
            <div className="about-profile-role">Node.js / Backend Developer</div>
            <div className="about-profile-loc">
              <MapPin size={14} color="var(--accent-emerald)" />
              <span>{personalInfo.location}</span>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", width: "100%", marginTop: "auto" }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio, Competencies & Focus Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div className="glass-card">
              <p style={{ fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {personalInfo.aboutDetailed}
              </p>

              <div className="walmart-highlight-box">
                <p>
                  <strong>Enterprise Experience:</strong> {personalInfo.walmartExperience}
                </p>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                  Core Competencies:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.45rem" }}>
                  {coreCompetencies.map((comp, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <CheckCircle2 size={14} color="var(--accent-emerald)" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* "What I focus on" Grid */}
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
                What I Focus On
              </h3>
              <div className="focus-grid">
                {focusAreas.map((area, idx) => {
                  const IconComp = iconMap[area.icon] || Zap;
                  return (
                    <div key={idx} className="focus-card">
                      <div className="focus-icon">
                        <IconComp size={18} />
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
      </div>

      {/* Full Photo Modal */}
      <ImageViewModal
        isOpen={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        imageSrc="/profile.png"
        title="Vikas Singh - Profile Photo"
      />
    </section>
  );
}

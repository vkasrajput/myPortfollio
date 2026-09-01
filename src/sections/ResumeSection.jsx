import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="section" aria-label="Resume Download">
      <div className="container">
        <div className="resume-box">
          <span className="section-badge">CAREER SNAPSHOT</span>
          <h2 className="resume-title">Let's build something reliable.</h2>
          <p className="resume-desc">
            Looking for a dedicated Backend Developer experienced in Node.js, Express, Microservices, and Databases? View or download my complete resume below.
          </p>

          <div className="resume-actions">
            <a
              href={personalInfo.resumePath}
              download="Vikas-Singh-Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>
          </div>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="var(--accent-emerald)" />
              <span>4+ Years Production Experience</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="var(--accent-emerald)" />
              <span>Walmart Canada Solution Workflows</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="var(--accent-emerald)" />
              <span>Available for Backend & Node.js Roles</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Lock, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-dialog">
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="project-badge">{project.badge || project.type || project.category}</span>
            <h2 id="modal-project-title" className="project-title" style={{ fontSize: "1.5rem", marginTop: "0.25rem" }}>
              {project.title}
            </h2>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "0.15rem" }}>
              {project.category} • {project.type}
            </div>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project modal"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Privacy Note Banner for Company Projects */}
          {project.isPrivate ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "0.85rem 1rem",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.84rem",
                color: "var(--text-secondary)",
              }}
            >
              <Lock size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "2px" }}>
                  Professional Project — Source code is private
                </strong>
                Enterprise architecture, data models, and backend contributions are presented here as a technical case study.
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                background: "rgba(6, 182, 212, 0.08)",
                border: "1px solid rgba(6, 182, 212, 0.25)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.84rem",
                color: "var(--text-secondary)",
              }}
            >
              <Sparkles size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Personal / Open-Source Project</strong> — Architecture and workflows available on GitHub.
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="modal-section-title">
              <Cpu size={18} color="var(--accent-emerald)" />
              <span>Project Overview</span>
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
              {project.shortDescription}
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          {project.architecture && (
            <div>
              <h3 className="modal-section-title">
                <Layers size={18} color="var(--accent-indigo)" />
                <span>Backend Architecture Flow</span>
              </h3>
              <ArchitectureDiagram
                architecture={project.architecture}
                title="System Execution Pipeline"
              />
            </div>
          )}

          {/* Key Contributions */}
          {project.keyContributions && project.keyContributions.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} color="var(--accent-emerald)" />
                <span>Key Technical Contributions</span>
              </h3>
              <ul className="modal-contributions-list">
                {project.keyContributions.map((item, idx) => (
                  <li key={idx} className="modal-contribution-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges and Solution */}
          {project.challenges && project.solution && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.85rem" }}>
              <div style={{ padding: "0.85rem 1rem", background: "var(--bg-surface-raised)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-md)" }}>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.35rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <ShieldCheck size={16} color="var(--accent-cyan)" />
                  <span>Engineering Challenge:</span>
                </h4>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>
                  {project.challenges}
                </p>
              </div>

              <div style={{ padding: "0.85rem 1rem", background: "var(--bg-surface-raised)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-md)" }}>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.35rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Implemented Solution:</span>
                </h4>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="modal-section-title">
              <span>Technologies Used</span>
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag highlight">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {project.isPrivate ? (
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              🔒 Professional project. Source code is private.
            </span>
          ) : (
            <span style={{ fontSize: "0.82rem", color: "var(--accent-emerald)", fontFamily: "var(--font-mono)" }}>
              ✓ Personal & Open Source
            </span>
          )}

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm" type="button">
              Close
            </button>
            {!project.isPrivate && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <GithubIcon size={15} />
                <span>View on GitHub</span>
              </a>
            )}
            {!project.isPrivate && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu } from "lucide-react";
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
            <span className="project-badge">{project.category}</span>
            <h2 id="modal-project-title" className="project-title" style={{ fontSize: "1.6rem" }}>
              {project.title}
            </h2>
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

          {/* Problem Solved */}
          <div>
            <h3 className="modal-section-title">
              <ShieldCheck size={18} color="var(--accent-cyan)" />
              <span>Engineering Challenge & Solution</span>
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
              {project.problemSolved}
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
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary btn-sm" type="button">
            Close
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <GithubIcon size={16} />
              <span>View on GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

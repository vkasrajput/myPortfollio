import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ProjectModal } from "../components/ProjectModal";
import { ExternalLink, ArrowRight, Lock, Sparkles, Layers, Briefcase, Code2 } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "professional",
      label: "Professional Projects",
      count: projects.filter((p) => p.category === "Professional Projects").length,
    },
    {
      id: "personal",
      label: "Personal Projects",
      count: projects.filter((p) => p.category === "Personal Projects").length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : activeCategory === "professional"
      ? projects.filter((p) => p.category === "Professional Projects")
      : projects.filter((p) => p.category === "Personal Projects");

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">PROJECT ARCHITECTURE</span>
          <h2 className="section-title">Engineered Backend Projects</h2>
          <p className="section-subtitle">
            Divided into professional production systems delivered in enterprise/SaaS environments, and personal open-source projects built for research and skills demonstration.
          </p>

          {/* Category Tabs */}
          <div
            style={{
              display: "inline-flex",
              background: "var(--bg-surface-raised)",
              padding: "0.35rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-color)",
              gap: "0.25rem",
              marginTop: "1.5rem",
              maxWidth: "100%",
              overflowX: "auto",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-md)",
                  border: "none",
                  cursor: "pointer",
                  background: activeCategory === cat.id ? "var(--accent-emerald)" : "transparent",
                  color: activeCategory === cat.id ? "#000" : "var(--text-secondary)",
                  transition: "all var(--transition-fast)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  whiteSpace: "nowrap",
                }}
                type="button"
              >
                {cat.id === "professional" && <Briefcase size={14} />}
                {cat.id === "personal" && <Code2 size={14} />}
                {cat.id === "all" && <Layers size={14} />}
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "999px",
                    background: activeCategory === cat.id ? "rgba(0,0,0,0.15)" : "var(--bg-surface)",
                  }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Category Description Subtitle */}
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {activeCategory === "professional" && (
              <span>💼 <strong>Professional Projects:</strong> Production projects delivered as part of my professional experience. Source code is private.</span>
            )}
            {activeCategory === "personal" && (
              <span>⚡ <strong>Personal Projects:</strong> Projects I built independently to explore technologies and demonstrate my engineering skills.</span>
            )}
            {activeCategory === "all" && (
              <span>Showing all {projects.length} professional and personal projects.</span>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span className={`project-badge ${project.isPrivate ? "private" : "personal"}`}>
                    {project.badge || project.category}
                  </span>

                  {project.isPrivate ? (
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <Lock size={11} color="var(--accent-emerald)" />
                      <span>Private Code</span>
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--accent-cyan)",
                        fontFamily: "var(--font-mono)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <Sparkles size={11} />
                      <span>Open Source</span>
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <div className="project-category">{project.type}</div>
                <p className="project-desc">{project.shortDescription}</p>

                {/* Tech Pills Preview */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag" style={{ fontSize: "0.72rem" }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag" style={{ fontSize: "0.72rem" }}>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <span className="btn-link" style={{ fontSize: "0.86rem" }}>
                  <span>{project.isPrivate ? "View Case Study" : "Inspect Details"}</span>
                  <ArrowRight size={14} />
                </span>

                {/* Only display GitHub/Demo icons if it's not a private company project AND url exists */}
                {!project.isPrivate && (
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        style={{ width: "32px", height: "32px" }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        style={{ width: "32px", height: "32px" }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Live Project Link"
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

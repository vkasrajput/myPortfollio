import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ProjectModal } from "../components/ProjectModal";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">PORTFOLIO WORK</span>
          <h2 className="section-title">Featured Backend Systems</h2>
          <p className="section-subtitle">
            Deep dive into production-grade backends, real-time architectures, DevOps automation, and AI integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
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
                <span className="project-badge">{project.badge || project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-category">{project.category}</div>
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
                <span className="btn-link" style={{ fontSize: "0.88rem" }}>
                  <span>Inspect Architecture & Details</span>
                  <ArrowRight size={15} />
                </span>

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

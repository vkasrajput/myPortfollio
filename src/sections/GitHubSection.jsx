import React from "react";
import { githubRepositories, personalInfo } from "../data/portfolioData";
import { Star, GitFork, ExternalLink, Code2, Lock } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export function GitHubSection() {
  return (
    <section id="github" className="section" aria-label="Personal Projects and GitHub">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
          <div>
            <span className="section-badge">OPEN SOURCE & REPOSITORIES</span>
            <h2 className="section-title">Personal Projects & GitHub</h2>
            <p className="section-subtitle">
              Public open-source repositories, CI/CD templates, AI experiments, and backend utilities. (Professional company projects are private and confidential).
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <GithubIcon size={16} />
            <span>Visit @vkasrajput</span>
          </a>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="github-grid">
          {githubRepositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-card"
              aria-label={`View ${repo.name} on GitHub`}
            >
              <div>
                <div className="github-card-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Code2 size={18} color="var(--accent-emerald)" />
                    <span className="github-repo-name">{repo.name}</span>
                  </div>
                  <ExternalLink size={15} color="var(--text-muted)" />
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "1rem" }}>
                  {repo.description}
                </p>

                {/* Topic tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {repo.topics.map((topic) => (
                    <span key={topic} className="tech-tag" style={{ fontSize: "0.68rem" }}>
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta stats */}
              <div className="github-card-meta">
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: repo.language === "Dockerfile" ? "var(--accent-cyan)" : "var(--accent-amber)",
                    }}
                  ></span>
                  <span>{repo.language}</span>
                </span>

                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Star size={13} />
                  <span>{repo.stars}</span>
                </span>

                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <GitFork size={13} />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { skillCategories } from "../data/portfolioData";
import { Server, Database, GitBranch, Shield, Search } from "lucide-react";

export function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const iconMap = {
    backend: Server,
    databases: Database,
    devops: GitBranch,
    security: Shield,
  };

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
          <div>
            <span className="section-badge">TECHNICAL EXPERTISE</span>
            <h2 className="section-title">Backend Skills & Tooling</h2>
            <p className="section-subtitle">
              Comprehensive toolkit for engineering production-ready backends, databases, and automated pipelines.
            </p>
          </div>

          {/* Quick Filter Input */}
          <div style={{ position: "relative", minWidth: "240px" }}>
            <Search
              size={16}
              style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
            />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: "2.25rem", fontSize: "0.85rem" }}
              aria-label="Filter skills"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => {
            const IconComp = iconMap[cat.id] || Server;
            return (
              <div key={cat.id} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-cat-icon">
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h3 className="skill-cat-name">{cat.name}</h3>
                    <p className="skill-cat-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skill-badges-wrapper">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`tech-tag ${skill.highlight ? "highlight" : ""}`}
                      style={{ padding: "0.45rem 0.85rem", fontSize: "0.85rem" }}
                    >
                      <span style={{ fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.85 }}>
                        • {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

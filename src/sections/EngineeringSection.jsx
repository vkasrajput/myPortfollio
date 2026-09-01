import React from "react";
import { CodeSnippet } from "../components/CodeSnippet";

export function EngineeringSection() {
  return (
    <section id="engineering" className="section" aria-label="Engineering Principles & Code Patterns">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CODE PATTERNS</span>
          <h2 className="section-title">Engineering Principles in Practice</h2>
          <p className="section-subtitle">
            Demonstrating clean separation of concerns, defensive programming, resilient caching, and automated CI/CD workflows.
          </p>
        </div>

        {/* Interactive Code Viewer with tab selector */}
        <CodeSnippet />
      </div>
    </section>
  );
}

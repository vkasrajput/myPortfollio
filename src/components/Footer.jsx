import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Role */}
          <div className="footer-brand">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              {personalInfo.name}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--accent-emerald)", fontFamily: "var(--font-mono)" }}>
              {personalInfo.role}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "400px", marginTop: "0.25rem" }}>
              Architecting reliable, high-throughput Node.js microservices and RESTful API solutions.
            </p>
          </div>

          {/* Social Connections */}
          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-link"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="footer-social-link"
              aria-label="Scroll to top of page"
              title="Scroll to top"
              type="button"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright & Status */}
        <div className="footer-bottom">
          <div>
            <span>© 2026 {personalInfo.name}. All rights reserved.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="status-dot"></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
              Backend Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="nav-brand" onClick={closeMobileMenu}>
          <div className="nav-brand-badge">
            <span>{personalInfo.initials}</span>
          </div>
          <div>
            <span>{personalInfo.name}</span>
            <span className="nav-brand-role">Node.js Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-toggle-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-toggle-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={personalInfo.resumePath}
            download="Vikas-Singh-Resume.pdf"
            className="btn btn-outline btn-sm"
            style={{ display: "none" }}
            id="nav-resume-btn"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            <span>{link.name}</span>
            <span>→</span>
          </a>
        ))}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.resumePath}
            download="Vikas-Singh-Resume.pdf"
            className="btn btn-primary btn-sm"
            style={{ flex: 1 }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

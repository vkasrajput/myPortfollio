import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, Send, Copy, Check, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhonePrimary, setCopiedPhonePrimary] = useState(false);
  const [copiedPhoneSecondary, setCopiedPhoneSecondary] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (number, type) => {
    navigator.clipboard.writeText(number);
    if (type === "primary") {
      setCopiedPhonePrimary(true);
      setTimeout(() => setCopiedPhonePrimary(false), 2500);
    } else {
      setCopiedPhoneSecondary(true);
      setTimeout(() => setCopiedPhoneSecondary(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link with encoded parameters as static fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section" aria-label="Contact Information">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle">
            Open to Backend Developer and Node.js engineering opportunities. Feel free to reach out directly via phone, email, LinkedIn, or through the contact form below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Channels & Copy Action */}
          <div className="contact-info-card">
            {/* Phone Channel (Primary) */}
            <div className="contact-channel">
              <div className="contact-channel-left">
                <div className="contact-channel-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    Phone (Primary)
                  </div>
                  <a
                    href="tel:+918787002307"
                    style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}
                  >
                    +91 8787002307
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.35rem" }}>
                <a
                  href="tel:+918787002307"
                  className="theme-toggle-btn"
                  aria-label="Call +91 8787002307"
                  title="Call +91 8787002307"
                >
                  <Phone size={15} />
                </a>
                <button
                  onClick={() => handleCopyPhone("+918787002307", "primary")}
                  className="theme-toggle-btn"
                  aria-label="Copy phone number"
                  title="Copy +91 8787002307"
                  type="button"
                >
                  {copiedPhonePrimary ? (
                    <Check size={16} color="var(--accent-emerald)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Channel (Secondary) */}
            <div className="contact-channel">
              <div className="contact-channel-left">
                <div className="contact-channel-icon" style={{ color: "var(--accent-cyan)", background: "rgba(6, 182, 212, 0.1)" }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    Phone (Alternate)
                  </div>
                  <a
                    href="tel:+918931890395"
                    style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}
                  >
                    +91 8931890395
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.35rem" }}>
                <a
                  href="tel:+918931890395"
                  className="theme-toggle-btn"
                  aria-label="Call +91 8931890395"
                  title="Call +91 8931890395"
                >
                  <Phone size={15} />
                </a>
                <button
                  onClick={() => handleCopyPhone("+918931890395", "secondary")}
                  className="theme-toggle-btn"
                  aria-label="Copy alternate phone number"
                  title="Copy +91 8931890395"
                  type="button"
                >
                  {copiedPhoneSecondary ? (
                    <Check size={16} color="var(--accent-emerald)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Email Channel */}
            <div className="contact-channel">
              <div className="contact-channel-left">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    Email
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="theme-toggle-btn"
                aria-label="Copy email address"
                title="Copy email address"
                type="button"
              >
                {copiedEmail ? (
                  <Check size={16} color="var(--accent-emerald)" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* LinkedIn Channel */}
            <div className="contact-channel">
              <div className="contact-channel-left">
                <div className="contact-channel-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    LinkedIn
                  </div>
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}
                  >
                    linkedin.com/in/vkasrajput
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                aria-label="Open LinkedIn profile"
                title="Open LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* GitHub Channel */}
            <div className="contact-channel">
              <div className="contact-channel-left">
                <div className="contact-channel-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                    GitHub
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}
                  >
                    github.com/vkasrajput
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                aria-label="Open GitHub profile"
                title="Open GitHub"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Availability Notice */}
            <div className="glass-card" style={{ padding: "1.25rem", marginTop: "auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span className="status-dot"></span>
                <strong style={{ fontSize: "0.95rem" }}>Immediate Availability</strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Available for full-time Backend / Node.js Developer positions, technical consulting, and architecture reviews.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Mailto Fallback */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Sarah Connor / Hiring Manager"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. sarah@company.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your backend project, team, or opportunity..."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
              <Send size={16} />
              <span>Send Message</span>
            </button>

            {formSubmitted && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--accent-emerald)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)",
                  marginTop: "0.5rem",
                  padding: "0.5rem",
                  background: "var(--bg-badge)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <CheckCircle2 size={16} />
                <span>Launching email client with your message details...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

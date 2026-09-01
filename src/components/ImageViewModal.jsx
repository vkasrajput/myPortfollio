import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, User } from "lucide-react";

export function ImageViewModal({ isOpen, onClose, imageSrc, title = "Vikas Singh" }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        zIndex: 999999,
        boxSizing: "border-box",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Profile photo view"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "var(--bg-surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          animation: "fadeIn 0.2s ease-out",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--border-color)",
            background: "var(--bg-surface-raised)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="status-dot"></span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close photo view"
            type="button"
            style={{ width: "32px", height: "32px" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Photo Container */}
        <div
          style={{
            padding: "1rem",
            background: "var(--bg-page)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "380px",
              maxHeight: "55vh",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-color)",
              background: "#0a0f1d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 15%",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.85rem 1.25rem",
            borderTop: "1px solid var(--border-color)",
            background: "var(--bg-surface-raised)",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
            Node.js Backend Developer
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ padding: "0.35rem 0.75rem", fontSize: "0.8rem" }}
            >
              <ExternalLink size={13} />
              <span>Full View</span>
            </a>
            <button
              onClick={onClose}
              className="btn btn-primary btn-sm"
              type="button"
              style={{ padding: "0.35rem 0.85rem", fontSize: "0.8rem" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

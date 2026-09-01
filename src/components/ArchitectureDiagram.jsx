import React from "react";
import { ArrowDown, Layers, Server, Database, Shield, Zap } from "lucide-react";

export function ArchitectureDiagram({ architecture, title }) {
  if (!architecture) return null;

  return (
    <div className="modal-arch-box" aria-label="System Architecture Diagram">
      {title && (
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.25rem" }}>
          {title}
        </div>
      )}

      {/* Layer 1: Client */}
      {architecture.client && (
        <>
          <div className="modal-arch-row">
            <span className="modal-arch-label">Client Layer</span>
            <span className="modal-arch-value">{architecture.client}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", color: "var(--text-muted)" }}>
            <ArrowDown size={14} />
          </div>
        </>
      )}

      {/* Layer 2: API Gateway / Routing */}
      {architecture.gateway && (
        <>
          <div className="modal-arch-row">
            <span className="modal-arch-label">API Gateway</span>
            <span className="modal-arch-value">{architecture.gateway}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", color: "var(--text-muted)" }}>
            <ArrowDown size={14} />
          </div>
        </>
      )}

      {/* Layer 3: Services / Business Logic */}
      {architecture.services && (
        <>
          <div className="modal-arch-row">
            <span className="modal-arch-label">Service Logic</span>
            <span className="modal-arch-value">{architecture.services}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", color: "var(--text-muted)" }}>
            <ArrowDown size={14} />
          </div>
        </>
      )}

      {/* Layer 4: Persistence / Caching */}
      {architecture.database && (
        <div className="modal-arch-row">
          <span className="modal-arch-label">Data & Cache</span>
          <span className="modal-arch-value">{architecture.database}</span>
        </div>
      )}
    </div>
  );
}

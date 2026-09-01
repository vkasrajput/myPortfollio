import React, { useState } from "react";
import { Copy, Check, Terminal, Code2 } from "lucide-react";
import { engineeringPrinciples } from "../data/portfolioData";

export function CodeSnippet() {
  const [activePrincipleId, setActivePrincipleId] = useState(
    engineeringPrinciples[0]?.id || "clean-architecture"
  );
  const [copied, setCopied] = useState(false);

  const currentPrinciple =
    engineeringPrinciples.find((p) => p.id === activePrincipleId) ||
    engineeringPrinciples[0];

  const handleCopy = () => {
    if (!currentPrinciple) return;
    navigator.clipboard.writeText(currentPrinciple.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="engineering-grid">
      {/* Left side: Principles List */}
      <div className="principles-list" role="tablist" aria-label="Engineering Principles">
        {engineeringPrinciples.map((principle) => {
          const isActive = principle.id === activePrincipleId;
          return (
            <button
              key={principle.id}
              onClick={() => setActivePrincipleId(principle.id)}
              className={`principle-item-btn ${isActive ? "active" : ""}`}
              role="tab"
              aria-selected={isActive}
              type="button"
            >
              <div className="principle-btn-title">
                <span>{principle.title}</span>
                {isActive && <span style={{ color: "var(--accent-emerald)", fontSize: "0.85rem" }}>●</span>}
              </div>
              <p className="principle-btn-summary">{principle.summary}</p>
            </button>
          );
        })}
      </div>

      {/* Right side: Code Viewer */}
      <div className="code-viewer-card">
        <div className="code-viewer-header">
          <div className="code-viewer-dots">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
          </div>
          <span className="code-viewer-title">
            backend / {currentPrinciple.id}.js
          </span>
          <button
            onClick={handleCopy}
            className="copy-btn"
            aria-label="Copy code snippet"
            type="button"
          >
            {copied ? (
              <>
                <Check size={14} color="var(--accent-emerald)" />
                <span style={{ color: "var(--accent-emerald)" }}>Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <pre className="code-pre-block">
          <code>{currentPrinciple.snippet}</code>
        </pre>
      </div>
    </div>
  );
}

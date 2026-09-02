import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function CurtainLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const [phase, setPhase] = useState("init"); // "init" -> "ready" -> "reveal" -> "done"

  useEffect(() => {
    // Check if prefers-reduced-motion is active
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check if loader has already played in this browser session
    const hasPlayed =
      typeof window !== "undefined" &&
      sessionStorage.getItem("portfolio_curtain_shown") === "true";

    if (hasPlayed || prefersReducedMotion) {
      return;
    }

    // Mark as active for first load
    setShouldRender(true);

    // Premium Pacing Timeline:
    // 0ms - 850ms: > initializing backend..._
    // 850ms - 1750ms: > systems operational ●
    // 1750ms - 2650ms: smooth cinematic curtain slide reveal
    // 2700ms: clean unmount from DOM
    const t1 = setTimeout(() => {
      setPhase("ready");
    }, 850);

    const t2 = setTimeout(() => {
      setPhase("reveal");
    }, 1750);

    const t3 = setTimeout(() => {
      setPhase("done");
      setShouldRender(false);
      try {
        sessionStorage.setItem("portfolio_curtain_shown", "true");
      } catch {
        // Safe fallback
      }
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!shouldRender || phase === "done") {
    return null;
  }

  const isRevealing = phase === "reveal";

  const loaderContent = (
    <div
      className={`curtain-container ${isRevealing ? "curtain-revealing" : ""}`}
      aria-live="polite"
      aria-label="Initial Page Loading Animation"
    >
      {/* Top Half Curtain */}
      <div className={`curtain-panel curtain-top ${isRevealing ? "slide-up" : ""}`}>
        <div className="curtain-grid-overlay"></div>
      </div>

      {/* Bottom Half Curtain */}
      <div className={`curtain-panel curtain-bottom ${isRevealing ? "slide-down" : ""}`}>
        <div className="curtain-grid-overlay"></div>
      </div>

      {/* Centered Backend Terminal Status Message */}
      <div className={`curtain-status-box ${isRevealing ? "fade-out" : ""}`}>
        <div className="curtain-status-badge">
          <span className="curtain-pulse-dot"></span>
          <span className="curtain-prompt">&gt;</span>
          <span className="curtain-text">
            {phase === "init" ? "initializing backend..." : "systems operational"}
          </span>
          {phase === "init" ? (
            <span className="curtain-cursor">_</span>
          ) : (
            <span style={{ color: "var(--accent-emerald)", fontSize: "0.75rem", marginLeft: "0.35rem", fontWeight: 700 }}>
              ONLINE
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(loaderContent, document.body);
}

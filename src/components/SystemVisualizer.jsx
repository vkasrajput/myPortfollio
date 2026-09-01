import React, { useState, useEffect } from "react";
import {
  Globe,
  Server,
  Layers,
  Database,
  Cpu,
  Zap,
  CheckCircle2,
  Play,
  RotateCcw,
} from "lucide-react";

export function SystemVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [latency, setLatency] = useState("14ms");
  const [cacheStatus, setCacheStatus] = useState("HIT");
  const [throughput, setThroughput] = useState("4.8k req/s");

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 500);
    setTimeout(() => setActiveStep(3), 1100);
    setTimeout(() => {
      setActiveStep(4);
      setLatency(`${Math.floor(Math.random() * 8 + 8)}ms`);
      setCacheStatus(Math.random() > 0.3 ? "HIT (0.8ms)" : "FALLBACK DB (12ms)");
    }, 1700);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveStep(0);
    }, 2800);
  };

  // Periodic subtle pulse simulation
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isSimulating) {
        setLatency(`${Math.floor(Math.random() * 6 + 10)}ms`);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isSimulating]);

  return (
    <div className="system-visualizer" aria-label="Backend System Architecture Simulation">
      <div className="visualizer-header">
        <div className="visualizer-title">
          <Cpu size={16} color="var(--accent-emerald)" />
          <span>LIVE BACKEND TELEMETRY</span>
        </div>
        <div className="visualizer-status">
          <span className="status-dot"></span>
          <span>NODE.js v20 • HEALTHY</span>
        </div>
      </div>

      <div className="system-flow-diagram">
        {/* Tier 1: Client Request */}
        <div className={`system-node ${activeStep === 1 ? "active" : ""}`}>
          <div className="system-node-info">
            <div className="system-node-icon">
              <Globe size={18} />
            </div>
            <div>
              <div className="system-node-name">Client Inbound Request</div>
              <div className="system-node-detail">HTTPS / REST / WebSocket</div>
            </div>
          </div>
          <span className="system-node-metric">200 OK</span>
        </div>

        {/* Connector */}
        <div className="system-node-connector">
          <div className="connector-line"></div>
          <div className="connector-pulse"></div>
        </div>

        {/* Tier 2: Node.js & Express Router */}
        <div className={`system-node ${activeStep === 2 ? "active" : ""}`}>
          <div className="system-node-info">
            <div className="system-node-icon" style={{ color: "var(--accent-emerald)" }}>
              <Server size={18} />
            </div>
            <div>
              <div className="system-node-name">Node.js + Express API Gateway</div>
              <div className="system-node-detail">JWT Auth • Rate Limiting • Validation</div>
            </div>
          </div>
          <span className="system-node-metric" style={{ color: "var(--accent-emerald)" }}>
            Async I/O
          </span>
        </div>

        {/* Connector */}
        <div className="system-node-connector">
          <div className="connector-line"></div>
          <div className="connector-pulse"></div>
        </div>

        {/* Tier 3: Microservices & Business Logic */}
        <div className={`system-node ${activeStep === 3 ? "active" : ""}`}>
          <div className="system-node-info">
            <div className="system-node-icon" style={{ color: "var(--accent-indigo)" }}>
              <Layers size={18} />
            </div>
            <div>
              <div className="system-node-name">Microservices & Business Logic</div>
              <div className="system-node-detail">Domain Services • Event Handlers • Workers</div>
            </div>
          </div>
          <span className="system-node-metric">Service Tier</span>
        </div>

        {/* Connector */}
        <div className="system-node-connector">
          <div className="connector-line"></div>
          <div className="connector-pulse"></div>
        </div>

        {/* Tier 4: Data & Cache Tier (Split) */}
        <div className="system-tier-split">
          {/* Redis Cache */}
          <div
            className={`system-node ${
              activeStep === 4 ? "active highlight-cyan" : ""
            }`}
          >
            <div className="system-node-info">
              <div className="system-node-icon" style={{ color: "var(--accent-rose)" }}>
                <Zap size={16} />
              </div>
              <div>
                <div className="system-node-name">Redis Cache</div>
                <div className="system-node-detail">In-Memory / PubSub</div>
              </div>
            </div>
          </div>

          {/* MongoDB / MySQL */}
          <div
            className={`system-node ${
              activeStep === 4 ? "active" : ""
            }`}
          >
            <div className="system-node-info">
              <div className="system-node-icon" style={{ color: "var(--accent-cyan)" }}>
                <Database size={16} />
              </div>
              <div>
                <div className="system-node-name">MongoDB / MySQL</div>
                <div className="system-node-detail">Indexed Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="visualizer-actions">
        <div className="visualizer-telemetry">
          <span>Latency: <strong style={{ color: "var(--text-primary)" }}>{latency}</strong></span>
          <span>Cache: <strong style={{ color: "var(--accent-emerald)" }}>{cacheStatus}</strong></span>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="btn btn-secondary btn-sm"
          type="button"
          aria-label="Simulate API Request Flow"
        >
          {isSimulating ? (
            <>
              <RotateCcw size={14} className="spin-animation" />
              <span>Routing...</span>
            </>
          ) : (
            <>
              <Play size={14} />
              <span>Simulate Flow</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

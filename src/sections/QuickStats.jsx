import React from "react";
import { quickStats } from "../data/portfolioData";
import { Clock, Server, Network, Building } from "lucide-react";

export function QuickStats() {
  const iconMap = {
    Clock: Clock,
    Server: Server,
    Network: Network,
    Building: Building,
  };

  return (
    <section className="quick-stats-section" aria-label="Key Qualifications Summary">
      <div className="container">
        <div className="stats-grid">
          {quickStats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Server;
            return (
              <div key={idx} className="stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="tech-tag" style={{ fontSize: "0.7rem" }}>Verified</span>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

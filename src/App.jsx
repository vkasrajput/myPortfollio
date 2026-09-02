import React from "react";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { CurtainLoader } from "./components/CurtainLoader";
import { HeroSection } from "./sections/HeroSection";
import { QuickStats } from "./sections/QuickStats";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ArchitectureSection } from "./sections/ArchitectureSection";
import { EngineeringSection } from "./sections/EngineeringSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { GitHubSection } from "./sections/GitHubSection";
import { ResumeSection } from "./sections/ResumeSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      {/* Initial Page Load Curtain Reveal */}
      <CurtainLoader />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <QuickStats />
        <AboutSection />
        <SkillsSection />
        <ArchitectureSection />
        <EngineeringSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

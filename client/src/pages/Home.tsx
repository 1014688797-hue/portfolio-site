/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Home: Main portfolio page composing all sections
 * Layout: Single-page scroll with animated botanical dividers
 */
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import AigcSection from "../components/sections/AigcSection";
import PlansSection from "../components/sections/PlansSection";
import NewsSection from "../components/sections/NewsSection";
import WorkSection from "../components/sections/WorkSection";
import LiterarySection from "../components/sections/LiterarySection";
import Footer from "../components/Footer";

function BotanicalDivider() {
  return (
    <div className="relative flex items-center justify-center py-2 overflow-hidden">
      <svg width="240" height="28" viewBox="0 0 240 28" fill="none" className="opacity-20">
        <path
          d="M0,14 C30,14 40,6 60,6 C80,6 80,22 100,22 C120,22 120,6 140,6 C160,6 170,14 200,14 C230,14 240,6 240,14"
          stroke="oklch(0.596 0.145 163.225)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="120" cy="14" r="2.5" fill="oklch(0.596 0.145 163.225)" />
        <circle cx="60" cy="6" r="1.5" fill="oklch(0.596 0.145 163.225 / 0.4)" />
        <circle cx="180" cy="14" r="1.5" fill="oklch(0.596 0.145 163.225 / 0.4)" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <BotanicalDivider />
      <ProjectsSection />
      <SkillsSection />
      <BotanicalDivider />
      <AigcSection />
      <PlansSection />
      <BotanicalDivider />
      <NewsSection />
      <WorkSection />
      <BotanicalDivider />
      <LiterarySection />
      <Footer />
    </div>
  );
}
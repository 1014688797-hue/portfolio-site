/*
 * Design: Neo-Swiss Botanical — 「数字花园」
 * Home: Main portfolio page composing all sections
 * Layout: Single-page scroll with botanical dividers between sections
 */
import Navbar from "../components/Navbar";
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
    <div className="flex items-center justify-center py-2 overflow-hidden">
      <svg width="200" height="24" viewBox="0 0 200 24" fill="none" className="opacity-20">
        <path
          d="M0,12 C30,12 40,4 60,4 C80,4 80,20 100,20 C120,20 120,4 140,4 C160,4 170,12 200,12"
          stroke="oklch(0.596 0.145 163.225)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="100" cy="12" r="2" fill="oklch(0.596 0.145 163.225)" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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

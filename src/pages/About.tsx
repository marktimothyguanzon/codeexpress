import AboutHero from "../components/features/about/hero/AboutHero";
import CompanyStory from "../components/features/about/story/CompanyStory";
import MissionCard from "../components/features/about/mission/MissionCard";


export default function About() {
  return (
    <>
      {/* Hero */}
      <AboutHero />

      {/* Company Story */}
      <CompanyStory />

      {/* Mission, Vision & Core Principles */}
      <MissionCard />

      {/* Why Choose CodeExpress */}
  
    </>
  );
}
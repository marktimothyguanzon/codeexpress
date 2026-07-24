import AboutHero from "../components/features/about/hero/AboutHero";
import CompanyStory from "../components/features/about/story/CompanyStory";
import MissionCard from "../components/features/about/mission/MissionCard";
import VisionCard from "../components/features/about/mission/VisionCard";
import Principles from "../components/features/about/mission/Principles";
import Team from "../components/features/about/team/Team";

export default function About() {
  return (
    <>
      {/* Hero */}
      <AboutHero />

      {/* Company Story */}
      <CompanyStory />

      {/* Mission, Vision & Core Principles */}
      <MissionCard />

    <VisionCard />
  
    <Principles /> 

    <Team />
  
    </>
  );
}
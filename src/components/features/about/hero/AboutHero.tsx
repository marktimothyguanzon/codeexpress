import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundEffects from "./BackgroundEffects";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      <BackgroundEffects />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}
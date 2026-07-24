import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb25,transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}
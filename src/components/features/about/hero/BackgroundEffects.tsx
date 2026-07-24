export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
    </>
  );
}
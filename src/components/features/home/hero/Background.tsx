export default function Background() {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1f4d] to-slate-900" />

      {/* Blue Glow */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Green Glow */}
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-green-500/20 blur-[100px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}
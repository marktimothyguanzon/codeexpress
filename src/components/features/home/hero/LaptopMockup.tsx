import laptop from "../../../../assets/mockups/laptop-frame.png";
import Dashboard from "./Dashboard";

export default function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[700px]">
      {/* Dashboard */}
      <div
        className="
          absolute
          left-[9.8%]
          top-[2.1%]
          h-[82.5%]
          w-[78%]
          overflow-hidden
          rounded-md
          sm:rounded-lg
          z-10
        "
      >
        <Dashboard />
      </div>

      {/* Laptop Frame */}
      <img
        src={laptop}
        alt="Laptop"
        className="relative z-20 w-full h-auto"
      />
    </div>
  );
}
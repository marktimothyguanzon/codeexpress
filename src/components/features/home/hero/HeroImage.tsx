import LaptopMockup from "./LaptopMockup";
import TechnologyIcons from "./TechnologyIcons";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        mt-10
        lg:mt-0
      "
    >
      <TechnologyIcons />

      <div
        className="
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
          xl:max-w-2xl
        "
      >
        <LaptopMockup />
      </div>
    </div>
  );
}
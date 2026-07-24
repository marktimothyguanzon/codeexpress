import { FiArrowRight } from "react-icons/fi";

export default function CTAButtons() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

      <button
        className="
          rounded-xl
          bg-blue-600
          px-8
          py-4
          text-lg
          font-bold
          text-white
          transition
          hover:bg-blue-700
        "
      >
        Get Free Consultation
      </button>

      <button
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          backdrop-blur-lg
          transition
          hover:bg-white/20
        "
      >
        View Portfolio

        <FiArrowRight />
      </button>

    </div>
  );
}
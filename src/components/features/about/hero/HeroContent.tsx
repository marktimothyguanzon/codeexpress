import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
        About CodeExpress
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
        Building Technology.

        <span className="mt-2 block text-green-400">
          Empowering People.
        </span>

        <span className="mt-2 block text-blue-400">
          Transforming Communities.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
        CodeExpress Software Solutions develops enterprise-grade
        software, modern websites, mobile applications,
        AI-powered systems, and cloud solutions that help
        organizations operate smarter and grow faster.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700">
          Our Services
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20">
          View Portfolio
          <FiArrowRight />
        </button>

      </div>
    </motion.div>
  );
}
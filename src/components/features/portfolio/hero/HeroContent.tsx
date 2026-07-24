import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] text-white">
        Our Portfolio
      </div>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
        Enterprise Software

        <span className="block text-blue-400">
          Built for the Future
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
        Discover CodeExpress flagship software solutions
        engineered to help organizations streamline
        operations, improve productivity, and accelerate
        digital transformation using modern technologies
        and industry best practices.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          Explore Products
        </button>

        <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:border-blue-500">
          Request Demo
        </button>

      </div>
    </motion.div>
  );
}
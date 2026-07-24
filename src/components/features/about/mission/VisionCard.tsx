import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="rounded-3xl bg-white p-10 shadow-xl"
    >
      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-full bg-blue-100 p-4">
          <Eye className="h-8 w-8 text-blue-600" />
        </div>

        <h3 className="text-3xl font-black text-slate-900">
          Our Vision
        </h3>

      </div>

      <p className="text-lg leading-8 text-slate-600">
        To become one of the Philippines' most trusted software companies,
        recognized globally for building innovative technology that empowers
        people, accelerates business growth, and transforms communities through
        digital innovation.
      </p>

      <div className="mt-10 space-y-4">

        <div className="rounded-xl bg-slate-50 p-5">
          🌍 Global-quality software solutions
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          🚀 Empower businesses through innovation
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          🤝 Invest in people and future developers
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          🌱 Transform communities with technology
        </div>

      </div>

    </motion.div>
  );
}
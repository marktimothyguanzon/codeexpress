import { motion } from "framer-motion";
import {
  FiCode,
  FiGlobe,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

export default function StoryImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid gap-6"
    >
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
        <FiCode size={42} />

        <h3 className="mt-5 text-2xl font-bold">
          Custom Software
        </h3>

        <p className="mt-3 text-blue-100">
          Enterprise-grade software tailored to your business.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <FiGlobe className="text-4xl text-blue-600" />

          <h4 className="mt-4 font-bold">
            Digital Transformation
          </h4>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <FiShield className="text-4xl text-green-500" />

          <h4 className="mt-4 font-bold">
            Secure Solutions
          </h4>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <FiTrendingUp className="text-4xl text-cyan-500" />

          <h4 className="mt-4 font-bold">
            Business Growth
          </h4>
        </div>

      </div>
    </motion.div>
  );
}
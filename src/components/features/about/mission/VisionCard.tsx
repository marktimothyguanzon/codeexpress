import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

export default function VisionCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        rounded-3xl
        bg-slate-900
        p-10
        text-white
        shadow-2xl
      "
    >
      <FiEye
        className="text-cyan-400"
        size={60}
      />

      <h3 className="mt-8 text-4xl font-black">
        Our Vision
      </h3>

      <p className="mt-8 text-lg leading-9 text-slate-300">
        We envision a future where technology is accessible,
        meaningful, and transformative.
      </p>

      <p className="mt-6 text-lg leading-9 text-slate-300">
        CodeExpress strives to become a globally respected
        software company that builds world-class digital
        solutions, empowers people to achieve more, and
        transforms communities through innovation,
        collaboration, and excellence.
      </p>

      <div className="mt-10 rounded-2xl bg-white/5 p-8 border border-white/10">
        <h4 className="text-xl font-bold text-cyan-400">
          Our Long-Term Aspiration
        </h4>

        <p className="mt-4 leading-8 text-slate-300">
          To become a trusted technology partner for
          organizations worldwide while creating meaningful
          social impact through innovation, education,
          and community empowerment.
        </p>
      </div>

    </motion.div>
  );
}
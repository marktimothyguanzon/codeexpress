import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase } from "react-icons/fi";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl">

        <div className="grid gap-6">

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-6">
            <FiCode className="text-4xl text-blue-400" />
            <div>
              <h3 className="text-xl font-bold text-white">
                Software Engineering
              </h3>
              <p className="text-slate-400">
                Enterprise Applications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-6">
            <FiCpu className="text-4xl text-green-400" />
            <div>
              <h3 className="text-xl font-bold text-white">
                Artificial Intelligence
              </h3>
              <p className="text-slate-400">
                Smart Automation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-6">
            <FiDatabase className="text-4xl text-cyan-400" />
            <div>
              <h3 className="text-xl font-bold text-white">
                Cloud Infrastructure
              </h3>
              <p className="text-slate-400">
                Secure & Scalable
              </p>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
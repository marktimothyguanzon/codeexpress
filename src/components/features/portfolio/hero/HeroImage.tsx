import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-600 p-5">
            <MonitorSmartphone className="h-12 w-12 text-white" />
          </div>

          <div>
            <h3 className="text-3xl font-black text-white">
              CodeExpress Products
            </h3>

            <p className="mt-2 text-slate-400">
              Modern Enterprise Software
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-slate-800 p-8">

          <div className="space-y-4">

            <div className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">
              🏫 School Management System
            </div>

            <div className="rounded-xl bg-slate-700 px-4 py-3 text-white">
              👥 HR & Payroll System
            </div>

            <div className="rounded-xl bg-slate-700 px-4 py-3 text-white">
              🏨 Hotel Management System
            </div>

            <div className="rounded-xl bg-slate-700 px-4 py-3 text-white">
              🍽 Restaurant POS System
            </div>

            <div className="rounded-xl bg-slate-700 px-4 py-3 text-white">
              🏥 Hospital Management System
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
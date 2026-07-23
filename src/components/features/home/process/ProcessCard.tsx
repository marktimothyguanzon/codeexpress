import { motion } from "framer-motion";

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export default function ProcessCard({
  number,
  title,
  description,
  icon,
}: ProcessCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="text-5xl">{icon}</div>

        <span className="text-4xl font-black text-blue-100">
          {number}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}
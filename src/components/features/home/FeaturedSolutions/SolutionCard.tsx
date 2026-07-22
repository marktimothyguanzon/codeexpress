import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  badge: string;
};

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  technologies,
  badge,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:shadow-2xl
      "
    >
      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={34} />
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          {badge}
        </span>

      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}

      </div>

      <button
        className="
          mt-8
          flex
          items-center
          font-semibold
          text-blue-600
          transition
          group-hover:gap-3
          gap-2
        "
      >
        Learn More

        <ArrowRight
          size={18}
        />
      </button>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  color: string;
};

export default function TechnologyCard({
  name,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: .25 }}
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      <Icon
        className="
          mx-auto
          h-12
          w-12
          transition-transform
          duration-300
          group-hover:rotate-12
        "
        color={color}
      />

      <h4 className="mt-5 text-center font-bold text-slate-800">
        {name}
      </h4>
    </motion.div>
  );
}
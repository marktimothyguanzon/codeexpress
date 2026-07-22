import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingIconProps = {
  icon: ReactNode;
  top: string;
  left: string;
  delay?: number;
};

export default function FloatingIcon({
  icon,
  top,
  left,
  delay = 0,
}: FloatingIconProps) {
  return (
    <motion.div
      className="
        absolute
        z-20
        flex
        items-center
        justify-center

        h-10 w-10
        sm:h-12 sm:w-12
        lg:h-16 lg:w-16

        rounded-full

        border border-white/20

        bg-white/10
        backdrop-blur-xl

        shadow-lg
        lg:shadow-2xl
      "
      style={{ top, left }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.15,
        rotate: 5,
      }}
    >
      {icon}
    </motion.div>
  );
}
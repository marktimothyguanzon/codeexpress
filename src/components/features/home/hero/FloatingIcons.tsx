import { motion } from "framer-motion";

type FloatingIconProps = {
  icon: React.ReactNode;
  top: string;
  left: string;
  delay?: number;
};

function FloatingIcon({
  icon,
  top,
  left,
  delay = 0,
}: FloatingIconProps) {
  return (
    <motion.div
      className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
      style={{ top, left }}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        delay,
      }}
      whileHover={{
        scale: 1.15,
      }}
    >
      {icon}
    </motion.div>
  );
}

export default FloatingIcon;
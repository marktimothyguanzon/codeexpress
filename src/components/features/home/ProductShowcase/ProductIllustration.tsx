import { motion } from "framer-motion";

type ProductIllustrationProps = {
  icon: string;
};

export default function ProductIllustration({
  icon,
}: ProductIllustrationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        flex
        h-[420px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
      "
    >
      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Floating Main Icon */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="z-20 text-[120px]"
      >
        {icon}
      </motion.div>

      {/* Dashboard Card */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          left-8
          top-10
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-5
          py-4
          text-white
          backdrop-blur-md
        "
      >
        Dashboard
      </motion.div>

      {/* Analytics Card */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          bottom-10
          right-8
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-5
          py-4
          text-white
          backdrop-blur-md
        "
      >
        Analytics
      </motion.div>

      {/* Statistics Card */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          right-12
          top-16
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-5
          py-4
          text-white
          backdrop-blur-md
        "
      >
        Reports
      </motion.div>

      {/* Users Card */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
        }}
        className="
          absolute
          bottom-12
          left-12
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-5
          py-4
          text-white
          backdrop-blur-md
        "
      >
        Users
      </motion.div>
    </motion.div>
  );
}
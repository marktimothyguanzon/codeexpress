import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductButtons() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/contact")}
        className="
          flex
          items-center
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          hover:bg-blue-700
        "
      >
        <MessageCircle className="mr-2" size={20} />

        Request Demo

      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        className="
          flex
          items-center
          rounded-xl
          border
          border-slate-300
          bg-white
          px-6
          py-3
          font-semibold
          transition-all
          hover:bg-slate-100
        "
      >
        Learn More

        <ArrowRight
          className="ml-2"
          size={18}
        />

      </motion.button>

    </div>
  );
}
import { ArrowRight, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/Button";

export default function CTAButtons() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-wrap gap-5">

      {/* Get Free Consultation */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2 }}
      >
        <Button onClick={() => navigate("/contact")}>

          Get Free Consultation

          <ArrowRight
            size={18}
            className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
          />

        </Button>
      </motion.div>

      {/* Portfolio */}
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="outline"
          onClick={() => navigate("/portfolio")}
        >

          <FolderOpen
            size={18}
            className="mr-2 inline"
          />

          View Portfolio

        </Button>
      </motion.div>

    </div>
  );
}
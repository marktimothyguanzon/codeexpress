import { motion } from "framer-motion";
import {
  FiCpu,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

export default function MissionCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        rounded-3xl
        bg-gradient-to-br
        from-blue-600
        to-cyan-500
        p-10
        text-white
        shadow-2xl
      "
    >
      <h3 className="text-4xl font-black">
        Our Mission
      </h3>

      <div className="mt-10 space-y-10">

        <div>
          <div className="flex items-center gap-4">
            <FiCpu className="text-3xl" />

            <h4 className="text-2xl font-bold">
              Building Technology
            </h4>
          </div>

          <p className="mt-4 leading-8 text-blue-100">
            To develop innovative, secure, and scalable digital
            solutions that solve real-world problems, improve
            operational efficiency, and enable organizations
            to thrive in the digital age.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FiUsers className="text-3xl" />

            <h4 className="text-2xl font-bold">
              Empowering People
            </h4>
          </div>

          <p className="mt-4 leading-8 text-blue-100">
            To empower businesses, educators, healthcare
            professionals, government institutions,
            entrepreneurs, and individuals by providing
            technology that enhances productivity,
            fosters innovation, and unlocks human potential.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FiGlobe className="text-3xl" />

            <h4 className="text-2xl font-bold">
              Transforming Communities
            </h4>
          </div>

          <p className="mt-4 leading-8 text-blue-100">
            To use technology as a catalyst for positive
            change by supporting education, strengthening
            local economies, improving public services,
            and creating opportunities that contribute to
            sustainable community development.
          </p>
        </div>

      </div>

    </motion.div>
  );
}
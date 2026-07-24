import { motion } from "framer-motion";
import {
  FiCpu,
  FiShield,
  FiAward,
  FiUsers,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const principles = [
  {
    icon: FiCpu,
    title: "Innovation",
    description:
      "Continuously embracing modern technologies to build smarter, faster, and future-ready solutions.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    description:
      "Building trust through honesty, transparency, accountability, and ethical business practices.",
  },
  {
    icon: FiAward,
    title: "Excellence",
    description:
      "Delivering high-quality software that meets the highest standards of performance, security, and reliability.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description:
      "Working closely with our clients to understand their goals and transform ideas into successful digital solutions.",
  },
  {
    icon: FiHeart,
    title: "Customer Success",
    description:
      "Our success is measured by the success of the people and organizations we serve.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Learning",
    description:
      "Investing in knowledge, innovation, and emerging technologies to stay ahead in a rapidly evolving digital world.",
  },
];

export default function Principles() {
  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
          Our Core Principles
        </p>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          The Values That Drive
          <span className="block text-blue-600">
            Everything We Build
          </span>
        </h2>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          Every decision we make, every project we deliver, and every
          relationship we build is guided by these core principles.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {principles.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
              "
            >
              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
              ">
                <Icon className="text-3xl text-blue-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
import { motion } from "framer-motion";

import AchievementCard from "./AchievementCard";
import { achievements } from "./achievements";

export default function Achievements() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Achievements & Recognition
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Building Excellence
            <span className="block text-blue-600">
              Every Day
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            CodeExpress is committed to building world-class software
            through innovation, quality, continuous learning, and
            modern engineering practices.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Technology Stack */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center text-white">

          <h3 className="text-4xl font-black">
            Technology Expertise
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We leverage modern technologies to build secure,
            scalable, and future-ready software solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              "React",
              "TypeScript",
              "Java",
              "Spring Boot",
              "Node.js",
              "MySQL",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Git",
              "GitHub",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
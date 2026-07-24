import { motion } from "framer-motion";

import TimelineCard from "./TimelineCard";
import { milestones } from "./milestones";

export default function CompanyTimeline() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Journey
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            The Beginning of
            <span className="block text-blue-600">
              CodeExpress
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Every great company starts with a vision. Our journey began in
            2027 with a commitment to build innovative software solutions,
            empower people through technology, and transform communities.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="mt-24 space-y-20">
          {milestones.map((milestone, index) => (
            <TimelineCard
              key={milestone.year}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>

        {/* Footer Message */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl bg-blue-600 p-12 text-center text-white"
        >
          <h3 className="text-4xl font-black">
            The Journey Has Just Begun
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            This milestone marks the beginning of CodeExpress. As we continue
            to grow, this timeline will reflect our products, achievements,
            partnerships, and contributions to businesses, education,
            government, healthcare, and communities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
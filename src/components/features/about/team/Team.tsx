import { motion } from "framer-motion";

import TeamMemberCard from "./TeamMemberCard";
import { members } from "./members";

export default function Team() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Meet Our Team
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            The People Behind
            <span className="block text-blue-600">
              CodeExpress
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Behind every successful software solution is a team dedicated to
            innovation, excellence, and creating technology that empowers
            people and transforms communities.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-3xl bg-blue-600 p-12 text-center text-white"
        >
          <h3 className="text-4xl font-black">
            Join the CodeExpress Team
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            We are building a culture of innovation, collaboration, and
            continuous learning. As CodeExpress grows, we look forward to
            welcoming talented professionals who share our mission of building
            technology, empowering people, and transforming communities.
          </p>

          <button
            className="
              mt-10
              rounded-xl
              bg-white
              px-8
              py-4
              font-bold
              text-blue-600
              transition
              hover:scale-105
            "
          >
            View Careers
          </button>
        </motion.div>
      </div>
    </section>
  );
}
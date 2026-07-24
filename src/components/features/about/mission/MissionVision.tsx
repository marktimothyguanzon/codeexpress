import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="bg-white py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="mx-auto max-w-4xl text-center"
      >

        <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
          Our Purpose
        </p>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          Building Technology.
          <span className="block text-green-500">
            Empowering People.
          </span>

          <span className="block text-blue-600">
            Transforming Communities.
          </span>
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          CodeExpress exists to create innovative software solutions that help
          organizations succeed while empowering individuals with technology
          and contributing to stronger, smarter, and more connected
          communities.
        </p>

      </motion.div>

    </section>
  );
}
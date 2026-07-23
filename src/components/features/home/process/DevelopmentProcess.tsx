import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { processSteps } from "./processData";

export default function DevelopmentProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Development Process
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            From Idea to Successful Software
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Every successful software project follows a proven process.
            At CodeExpress, we combine strategy, design, engineering,
            testing, and continuous support to deliver high-quality
            digital solutions that help organizations grow.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="mt-20">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <ProcessCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </motion.div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold">
            Your Vision. Our Expertise.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Whether you're building a school management system,
            enterprise platform, mobile application, or AI-powered
            solution, our team is ready to transform your ideas into
            secure, scalable, and future-ready software.
          </p>

          <button
            className="
              mt-8
              rounded-xl
              bg-white
              px-8
              py-4
              text-lg
              font-bold
              text-blue-700
              transition
              hover:scale-105
            "
          >
            Start Your Project
          </button>
        </motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../../../common/Container";
import SolutionCard from "./SolutionCard";
import { solutions } from "./data";

export default function FeaturedSolutions() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Our Flagship Products
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl lg:text-6xl">
            Powerful Software Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            CodeExpress develops enterprise-grade software solutions
            designed for schools, businesses, hotels, restaurants,
            healthcare providers, and government institutions.
            Every product is built using modern technologies,
            scalable architecture, and industry best practices.
          </p>

        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-3 gap-8 text-center"
        >

          <div>
            <h3 className="text-4xl font-black text-blue-600">
              6
            </h3>

            <p className="mt-2 text-slate-600">
              Flagship Products
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-emerald-600">
              100%
            </h3>

            <p className="mt-2 text-slate-600">
              Enterprise Ready
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-indigo-600">
              ∞
            </h3>

            <p className="mt-2 text-slate-600">
              Scalable
            </p>
          </div>

        </motion.div>

        {/* Solution Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <SolutionCard {...solution} />
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

          <button
            className="
              inline-flex
              items-center
              rounded-xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            View All Solutions

            <ArrowRight
              className="ml-2"
              size={20}
            />
          </button>

        </motion.div>

      </Container>

    </section>
  );
}
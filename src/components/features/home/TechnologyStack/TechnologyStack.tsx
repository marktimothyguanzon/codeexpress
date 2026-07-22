import { motion } from "framer-motion";

import Container from "../../../common/Container";
import TechnologyCategory from "./TechnologyCategory";
import { categories } from "./data";

export default function TechnologyStack() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .7,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Modern Technologies.
            <br />
            Reliable Solutions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We leverage modern frameworks, cloud platforms,
            and enterprise-grade technologies to build
            scalable, secure, and future-ready software.
          </p>

        </motion.div>

        <div className="space-y-16">

          {categories.map((category) => (
            <TechnologyCategory
              key={category.title}
              {...category}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
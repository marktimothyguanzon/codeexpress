import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Building lasting partnerships through quality software,
            reliable support, and outstanding customer service.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                {...testimonial}
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
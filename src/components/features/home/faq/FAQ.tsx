import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Here are answers to the questions we receive most often from businesses,
            schools, government agencies, and organizations looking for custom software.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
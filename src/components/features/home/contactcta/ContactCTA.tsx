import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import ContactInfo from "./ContactInfo";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Ready to Start?
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
            Let's Build Your
            <span className="block text-cyan-400">
              Next Software Project
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            Whether you're planning a custom software solution,
            modern website, mobile application, or enterprise
            platform, CodeExpress is ready to help turn your
            vision into reality.
          </p>

          <CTAButtons />

        </motion.div>

        <ContactInfo />

      </div>

    </section>
  );
}
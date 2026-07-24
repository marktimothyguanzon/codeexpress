import { motion } from "framer-motion";

export default function StoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
        Our Story
      </p>

      <h2 className="mt-4 text-5xl font-black leading-tight text-slate-900">
        Building Technology That
        <span className="block text-blue-600">
          Creates Lasting Impact
        </span>
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        CodeExpress Software Solutions was founded with a clear purpose:
        to help businesses, educational institutions, government agencies,
        healthcare providers, and startups embrace digital transformation
        through innovative, reliable, and scalable software solutions.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We believe technology should simplify complex processes, improve
        productivity, and create meaningful value. Every website,
        enterprise application, mobile app, and AI-powered solution we
        develop is designed with quality, security, performance, and
        long-term growth in mind.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Our vision extends beyond building software. We aim to empower
        communities, support organizations in achieving their goals,
        and contribute to a future where technology creates opportunities
        for everyone.
      </p>
    </motion.div>
  );
}
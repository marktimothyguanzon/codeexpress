import { motion } from "framer-motion";

interface TimelineCardProps {
  milestone: {
    year: string;
    title: string;
    icon: React.ElementType;
    description: string;
  };

  index: number;
}

export default function TimelineCard({
  milestone,
  index,
}: TimelineCardProps) {
  const Icon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      className="relative mx-auto max-w-3xl"
    >
      {/* Timeline Line */}
      <div className="absolute left-10 top-0 h-full w-1 rounded-full bg-blue-200" />

      {/* Timeline Dot */}
      <div className="absolute left-6 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* Card */}
      <div className="ml-24 rounded-3xl bg-white p-10 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <span className="text-lg font-bold uppercase tracking-widest text-blue-600">
          {milestone.year}
        </span>

        <h3 className="mt-3 text-3xl font-black text-slate-900">
          {milestone.title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {milestone.description}
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h4 className="font-bold text-slate-900">
            Our Mission
          </h4>

          <p className="mt-3 text-slate-600">
            Building Technology.
            <br />
            Empowering People.
            <br />
            Transforming Communities.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
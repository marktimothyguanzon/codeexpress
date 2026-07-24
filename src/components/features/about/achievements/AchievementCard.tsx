import { motion } from "framer-motion";

interface AchievementCardProps {
  achievement: {
    icon: React.ElementType;
    title: string;
    description: string;
  };

  index: number;
}

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
      "
    >
      <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {achievement.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {achievement.description}
      </p>
    </motion.div>
  );
}
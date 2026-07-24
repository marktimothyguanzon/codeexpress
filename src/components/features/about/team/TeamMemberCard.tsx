import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamMemberCardProps {
  member: {
    name: string;
    position: string;
    image: string;
    description: string;
    linkedin: string;
    github: string;
  };

  index: number;
}

export default function TeamMemberCard({
  member,
  index,
}: TeamMemberCardProps) {
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
        y: -10,
      }}
      className="
        rounded-3xl
        bg-white
        shadow-lg
        overflow-hidden
        transition
        hover:shadow-2xl
      "
    >
      <div className="flex justify-center bg-slate-100 py-10">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-40 w-40 rounded-full object-cover"
          />
        ) : (
          <UserCircle2 className="h-40 w-40 text-slate-400" />
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-2 font-semibold text-blue-600">
          {member.position}
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          {member.description}
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-100 p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-200 p-3 transition hover:bg-slate-900 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
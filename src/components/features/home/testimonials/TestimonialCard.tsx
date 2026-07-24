import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

type TestimonialCardProps = {
  name: string;
  position: string;
  company: string;
  rating: number;
  message: string;
};

export default function TestimonialCard({
  name,
  position,
  company,
  rating,
  message,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
    >
      {/* Stars */}
      <div className="mb-6 flex gap-1 text-yellow-400">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Testimonial */}
      <p className="leading-8 text-slate-600 italic">
        "{message}"
      </p>

      {/* Client */}
      <div className="mt-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-bold text-slate-900">
            {name}
          </h4>

          <p className="text-sm text-slate-500">
            {position}
          </p>

          <p className="text-sm text-blue-600">
            {company}
          </p>
        </div>

      </div>
    </motion.div>
  );
}
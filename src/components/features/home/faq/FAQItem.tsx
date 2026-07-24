import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-8 text-slate-600">
              {answer}
            </p>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";

import type { Product } from "./types";
import ProductFeatures from "./ProductFeatures";
import TechnologyPills from "./TechnologyPills";
import ProductButtons from "./ProductButtons";
import ProductIllustration from "./ProductIllustration";

type Props = {
  product: Product;
};

export default function ProductContent({
  product,
}: Props) {
  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={product.id}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -40,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          grid
          gap-12
          lg:grid-cols-2
          lg:items-center
        "
      >
        {/* Left */}

        <div>

          <span
            className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            {product.status}
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            {product.title}
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            {product.description}
          </p>

          <ProductFeatures
            features={product.features}
          />

          <TechnologyPills
            technologies={product.technologies}
          />

          <ProductButtons />

        </div>

        {/* Right */}

        <ProductIllustration
          icon={product.icon}
        />

      </motion.div>

    </AnimatePresence>
  );
}
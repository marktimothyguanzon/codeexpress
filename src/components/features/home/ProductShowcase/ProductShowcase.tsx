import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../../../common/Container";

import ProductTabs from "./ProductTabs";
import ProductContent from "./ProductContent";

import { products } from "./data";

export default function ProductShowcase() {
  const [selected, setSelected] = useState(products[0]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
      "
    >
      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-600
            "
          >
            Enterprise Software
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            Software Solutions Built for Every Industry
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Discover CodeExpress flagship enterprise products designed to
            streamline operations, improve productivity, and accelerate digital
            transformation.
          </p>
        </motion.div>

        <ProductTabs
          products={products}
          selected={selected}
          onSelect={setSelected}
        />

        <div
          className="
            mt-12
            rounded-[32px]
            bg-white
            p-10
            shadow-2xl
          "
        >
          <ProductContent
            product={selected}
          />
        </div>

      </Container>
    </section>
  );
}
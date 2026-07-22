import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import logo from "../../../../assets/logo/codeexpress-logo.png";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-10 text-center lg:pb-0 lg:text-left"
    >
      {/* CodeExpress Logo */}
      <div className="mb-6 flex justify-center lg:justify-start">
        <img
          src={logo}
          alt="CodeExpress Software Solutions"
          className="
            w-36
            sm:w-44
            md:w-52
            lg:w-60
            xl:w-72
            drop-shadow-2xl
          "
        />
      </div>

      {/* Welcome Badge */}
      <div
        className="
          inline-block
          rounded-full
          bg-blue-600
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-white
          shadow-lg
          sm:text-sm
        "
      >
        Welcome to CodeExpress
      </div>

      {/* Heading */}
      <h1
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Building Technology.

        <span className="block text-green-400">
          Empowering People.
        </span>

        <span className="block text-blue-400">
          Transforming Communities.
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-6
          max-w-xl
          text-base
          leading-7
          text-slate-300
          sm:text-lg
          lg:mx-0
          lg:text-xl
        "
      >
        We build custom software, enterprise systems, modern websites,
        mobile applications, cloud platforms, and AI-powered solutions
        that help businesses, schools, government agencies, and startups
        operate smarter and grow faster.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex justify-center lg:justify-start">
        <CTAButtons />
      </div>
    </motion.div>
  );
}
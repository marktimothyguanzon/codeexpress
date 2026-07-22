import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import logo from "../../../../assets/logo/codeexpress-logo.png";

export default function HeroContent() {
  return (
    <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>



  {/* CodeExpress Logo */}
  <div className="mb-8">
    <img
      src={logo}
      alt="CodeExpress Software Solutions"
      className="
        w-48
        md:w-56
        lg:w-64
        xl:w-72
        drop-shadow-2xl
      "
    />
  </div>

{/* Welcome Badge */}
  <div className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white">
    Welcome to CodeExpress
  </div>

  {/* Heading */}

      <h1
  className="
    mt-8
    text-5xl
    font-black
    leading-tight
    tracking-tight
    text-white
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

     <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
  We build custom software, enterprise systems, modern websites,
  mobile applications, cloud platforms, and AI-powered solutions
  that help businesses, schools, government agencies, and startups
  operate smarter and grow faster.
</p>

      <CTAButtons />
    </motion.div>
  );
}
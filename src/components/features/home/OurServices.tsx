import {
  Globe,
  Code2,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional, responsive, and SEO-friendly websites tailored to your business.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Business management systems, ERP, CRM, HRIS, Payroll, and enterprise software.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications built for performance and scalability.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Secure database design, migration, optimization, backup, and reporting.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploy, manage, and scale applications using modern cloud infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Integrate AI chatbots, automation, analytics, and intelligent business tools.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates, security improvements, and technical support.",
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Innovative Digital Solutions for Every Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We help businesses transform ideas into powerful digital products
            through custom software, modern websites, cloud technologies, and
            AI-driven solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={32}
                    className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button
                  onClick={() => navigate("/services")}
                  className="mt-6 flex items-center font-semibold text-blue-600 transition-all group-hover:translate-x-1"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
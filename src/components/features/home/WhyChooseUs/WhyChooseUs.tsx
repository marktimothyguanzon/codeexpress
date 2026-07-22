import Container from "../../../common/Container";
import WhyChooseCard from "./WhyChooseCard";
import { features } from "./data";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Why Choose CodeExpress
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Building Software That Drives Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine innovation, modern technologies, and industry best
            practices to deliver reliable, scalable, and future-ready
            digital solutions.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <WhyChooseCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>
      </Container>
    </section>
  );
}
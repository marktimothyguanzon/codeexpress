import Container from "../../../common/Container";
import SolutionCard from "./SolutionCard";
import { solutions } from "./data";

export default function FeaturedSolutions() {
  return (
    <section className="bg-white py-24">

      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Featured Solutions
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Powerful Software Solutions for Every Industry
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover enterprise-grade systems designed to help schools,
            businesses, hotels, restaurants, healthcare providers,
            and government organizations operate more efficiently.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              {...solution}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}
import TechnologyCard from "./TechnologyCard";

type Props = {
  title: string;
  technologies: any[];
};

export default function TechnologyCategory({
  title,
  technologies,
}: Props) {
  return (
    <div>

      <h3 className="mb-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">

        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.name}
            {...tech}
          />
        ))}

      </div>

    </div>
  );
}
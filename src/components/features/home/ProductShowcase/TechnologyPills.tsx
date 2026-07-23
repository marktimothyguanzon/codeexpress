type Props = {
  technologies: string[];
};

export default function TechnologyPills({
  technologies,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      {technologies.map((tech) => (

        <span
          key={tech}
          className="
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-700
          "
        >
          {tech}
        </span>

      ))}

    </div>
  );
}
interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
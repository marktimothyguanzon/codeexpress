export default function TrustedCompanies() {
  const companies = [
    "Government",
    "Education",
    "Healthcare",
    "Retail",
    "Hospitality",
    "Startups",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
            Trusted By
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Organizations We Build For
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            CodeExpress develops reliable software solutions for businesses,
            schools, government agencies, healthcare providers,
            hospitality, and growing startups.
          </p>

        </div>

        {/* Company Cards */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="
                flex
                h-40
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <h3 className="text-lg font-bold text-slate-700">
                {company}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
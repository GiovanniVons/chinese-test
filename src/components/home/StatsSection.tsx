const stats = [
  { value: "60+", label: "Locations Nationwide" },
  { value: "25+", label: "Years of Excellence" },
  { value: "4", label: "Unique Brands" },
  { value: "1,500+", label: "Team Members" },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-red">
                {stat.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-brand-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

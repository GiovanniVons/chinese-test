import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getJobs } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import JobCard from "@/components/careers/JobCard";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Join the China Star Group team. Browse open positions across our 60+ restaurant locations and corporate offices.",
  path: "/careers",
});

const categories = [
  {
    icon: "Culinary",
    title: "The Heart of the House",
    description: "Executive Chefs, Wok Artisans, and Prep Specialists",
  },
  {
    icon: "Service",
    title: "Front of House",
    description: "Maitres D', Sommelier, Servers, and Hosts",
  },
  {
    icon: "Leadership",
    title: "Management",
    description: "General Managers and Multi-Unit Directors",
  },
  {
    icon: "Corporate",
    title: "Corporate Team",
    description: "Strategy, Marketing, Operations, and Finance",
  },
];

export default function CareersPage() {
  const jobs = getJobs();

  const grouped = jobs.reduce<Record<string, typeof jobs>>((acc, job) => {
    if (!acc[job.category]) acc[job.category] = [];
    acc[job.category].push(job);
    return acc;
  }, {});

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Careers"
        subtitle="Build your legacy with one of the nation's premier hospitality groups. Excellence starts here."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Categories overview */}
      <section className="py-20 md:py-32 bg-brand-charcoal relative z-10 border-b border-brand-gray/10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-4">
              Our <span className="italic text-brand-gold">Departments</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="text-center p-8 bg-brand-black border border-brand-gray/10 group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-cormorant font-medium text-brand-light mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-brand-gray">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Job listings */}
      <section className="py-20 md:py-32 bg-brand-black relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-4">
                Open <span className="italic text-brand-gray">Positions</span>
              </h2>
            </div>

            <div className="space-y-16">
              {Object.entries(grouped).map(([category, categoryJobs]) => (
                <div key={category} className="border-t border-brand-gray/10 pt-8">
                  <h3 className="text-lg font-montserrat uppercase tracking-[0.2em] text-brand-gold mb-8">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {categoryJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section className="py-20 md:py-32 bg-brand-charcoal border-t border-brand-gray/10">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">
                Inquire
              </p>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-6">
                Submit <span className="italic text-brand-gray">Application</span>
              </h2>
              <p className="text-brand-gray font-light">
                To be considered for future opportunities, please provide your details below. Our talent acquisition team will review your profile.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </Container>
      </section>
    </div>
  );
}

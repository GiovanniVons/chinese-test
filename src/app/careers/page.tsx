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
    icon: "🍳",
    title: "Kitchen",
    description: "Cooks, prep staff, and sushi chefs",
  },
  {
    icon: "🤝",
    title: "Front of House",
    description: "Cashiers, servers, and buffet attendants",
  },
  {
    icon: "📋",
    title: "Management",
    description: "Shift, restaurant, and district managers",
  },
  {
    icon: "🏢",
    title: "Corporate",
    description: "Marketing, HR, IT, and operations",
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
    <>
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career with one of America's largest mall-based restaurant groups. We're hiring across all locations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Categories overview */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="text-center p-6 bg-brand-light rounded-xl"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-bold text-brand-black text-sm">
                  {cat.title}
                </h3>
                <p className="text-xs text-brand-gray mt-1">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Job listings */}
      <section className="py-12 md:py-16 bg-brand-light">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">
            Open Positions
          </h2>
          <div className="space-y-8">
            {Object.entries(grouped).map(([category, categoryJobs]) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-brand-black mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
              Apply Now
            </h2>
            <p className="text-brand-gray mb-8">
              Interested in joining our team? Submit your information below and
              we&apos;ll be in touch.
            </p>
            <ApplicationForm />
          </div>
        </Container>
      </section>
    </>
  );
}

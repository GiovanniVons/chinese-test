import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about China Star Group — our history, mission, and the values that drive us to deliver exceptional Chinese dining across 60+ locations nationwide.",
  path: "/about",
});

const milestones = [
  { year: "1998", title: "The Beginning", description: "First China Star Buffet opens in a mall food court in Philadelphia, PA. What started as a small family operation quickly gained a loyal following." },
  { year: "2005", title: "Regional Growth", description: "China Star Buffet expands to 15 locations across the Northeast, establishing itself as a trusted name in mall-based Chinese dining." },
  { year: "2012", title: "Jade Wok Launches", description: "Our second brand, Jade Wok, debuts with a made-to-order Pan-Asian wok concept, diversifying our portfolio." },
  { year: "2016", title: "Lucky Bowl Express", description: "Lucky Bowl Express launches as our fast-casual concept, bringing quick-service Chinese American favorites to busy shoppers." },
  { year: "2020", title: "Golden Dragon Grill", description: "Our premium hibachi concept, Golden Dragon Grill, opens its first five locations, redefining mall dining." },
  { year: "2025", title: "60+ Locations", description: "China Star Group celebrates its 60th location opening, operating across 25+ states with over 1,500 team members." },
];

const values = [
  { title: "Quality First", description: "Every dish is prepared daily using fresh ingredients and time-honored recipes. We never compromise on taste or quality." },
  { title: "Community", description: "Our restaurants are gathering places for families and friends. We invest in the communities that welcome us." },
  { title: "Innovation", description: "From our flagship buffet to premium hibachi, we continuously evolve our concepts to meet changing tastes." },
  { title: "People", description: "Our 1,500+ team members are the heart of our business. We foster growth, provide opportunities, and celebrate diversity." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="From a single restaurant in Philadelphia to 60+ locations nationwide — the story of China Star Group."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              A Family Legacy in American Dining
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-4">
              China Star Group was founded in 1998 by a family of immigrant entrepreneurs
              with a simple vision: bring authentic, high-quality Chinese cuisine to everyday
              Americans at an unbeatable value.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed">
              What began as a single all-you-can-eat buffet in a Philadelphia mall has grown
              into one of the largest mall-based restaurant groups in the United States. Today,
              we operate four distinct brands across 60+ locations in 25+ states, serving millions
              of guests every year.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-brand-light">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-brand-red">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-brand-red rounded-full" />
                </div>
                <div className="pb-8 border-l-0">
                  <h3 className="text-lg font-bold text-brand-black">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-brand-gray leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-xl bg-brand-light">
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  {value.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

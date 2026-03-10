import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getLocations, getLocationById, getBrandById } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return getLocations().map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const location = getLocationById(id);
  if (!location) return {};
  return createMetadata({
    title: `${location.name} - ${location.mall}`,
    description: `Visit ${location.name} at ${location.mall} in ${location.city}, ${location.state}. Order online through DoorDash or Uber Eats.`,
    path: `/locations/${location.id}`,
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const location = getLocationById(id);
  if (!location) notFound();

  const brand = getBrandById(location.brandId);

  const hoursEntries = [
    { day: "Monday", hours: location.hours.monday },
    { day: "Tuesday", hours: location.hours.tuesday },
    { day: "Wednesday", hours: location.hours.wednesday },
    { day: "Thursday", hours: location.hours.thursday },
    { day: "Friday", hours: location.hours.friday },
    { day: "Saturday", hours: location.hours.saturday },
    { day: "Sunday", hours: location.hours.sunday },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${location.name} - ${location.mall}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    telephone: location.phone,
    servesCuisine: "Chinese",
    priceRange: "$$",
    parentOrganization: {
      "@type": "Organization",
      name: "China Star Group",
    },
  };

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={location.mall}
        subtitle={`${location.name} &middot; ${location.city}, ${location.state}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Reservations", href: "/locations" },
          { label: location.mall },
        ]}
      />

      <section className="py-16 md:py-24 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

            {/* Main info */}
            <div className="lg:col-span-7 space-y-12">

              {/* Address */}
              <div>
                <h2 className="text-3xl font-cormorant font-medium text-brand-light mb-6">
                  Location <span className="italic text-brand-gold">Details</span>
                </h2>
                <div className="bg-brand-charcoal border border-brand-gray/20 p-8 md:p-10 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Collection</p>
                    <p className="text-brand-light font-cormorant text-2xl">
                      {brand?.name || location.name}
                    </p>
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Address</p>
                    <p className="text-brand-gray font-light text-lg leading-relaxed">
                      {location.address}
                      <br />
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                  <div>
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-2">Direct Line</p>
                    <a
                      href={`tel:${location.phone.replace(/\D/g, "")}`}
                      className="text-brand-light hover:text-brand-gold transition-colors font-light text-lg"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="text-3xl font-cormorant font-medium text-brand-light mb-6">
                  Hours of <span className="italic text-brand-gold">Operation</span>
                </h2>
                <div className="bg-brand-charcoal border border-brand-gray/20 p-8 md:p-10">
                  <table className="w-full text-base font-light">
                    <tbody>
                      {hoursEntries.map((entry) => (
                        <tr key={entry.day} className="border-b border-brand-gray/10 last:border-0 group hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 font-montserrat text-sm tracking-wide text-brand-light">
                            {entry.day}
                          </td>
                          <td className="py-4 px-4 text-brand-gray text-right group-hover:text-brand-gold transition-colors">
                            {entry.hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar - Order */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 bg-brand-charcoal border border-brand-gold/30 p-8 md:p-10 space-y-8 shadow-2xl">
                <div className="text-center mb-10">
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">
                    Premium Delivery
                  </p>
                  <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-brand-light">
                    Order <span className="italic text-brand-gray">Online</span>
                  </h2>
                  <p className="mt-4 text-sm text-brand-gray font-light leading-relaxed">
                    Experience {location.name} in the comfort of your home.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={location.doordashUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full px-6 py-4 border border-[#FF3008]/50 hover:bg-[#FF3008]/10 text-brand-light transition-all duration-300 group"
                  >
                    <span className="font-montserrat text-xs uppercase tracking-widest group-hover:text-[#FF3008] transition-colors">DoorDash</span>
                    <span className="text-[#FF3008]">&rarr;</span>
                  </a>
                  <a
                    href={location.uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full px-6 py-4 border border-[#06C167]/50 hover:bg-[#06C167]/10 text-brand-light transition-all duration-300 group"
                  >
                    <span className="font-montserrat text-xs uppercase tracking-widest group-hover:text-[#06C167] transition-colors">Uber Eats</span>
                    <span className="text-[#06C167]">&rarr;</span>
                  </a>
                </div>

                <div className="pt-8 space-y-4 border-t border-brand-gray/10 mt-8">
                  <Button href="/menu" variant="primary" className="w-full py-4 text-xs font-montserrat uppercase tracking-[0.2em] rounded-none">
                    View Tasting Menu
                  </Button>
                  <Button href="/locations" variant="outline" className="w-full py-4 text-xs font-montserrat uppercase tracking-[0.2em] rounded-none border-brand-gray/30 text-brand-gray hover:text-brand-light hover:border-brand-gray">
                    Return to Directory
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

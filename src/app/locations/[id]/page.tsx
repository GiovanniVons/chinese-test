import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getLocations, getLocationById, getBrandById } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import OrderButtons from "@/components/locations/OrderButtons";
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={location.mall}
        subtitle={`${location.name} &middot; ${location.city}, ${location.state}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.mall },
        ]}
      />

      <section className="py-8 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div>
                <h2 className="text-xl font-bold text-brand-black mb-3">
                  Location Details
                </h2>
                <div className="bg-brand-light rounded-xl p-6 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-brand-gray">Brand</p>
                    <p className="text-brand-black font-semibold">
                      {brand?.name || location.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-gray">Address</p>
                    <p className="text-brand-black">
                      {location.address}
                      <br />
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-gray">Phone</p>
                    <a
                      href={`tel:${location.phone.replace(/\D/g, "")}`}
                      className="text-brand-red hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="text-xl font-bold text-brand-black mb-3">
                  Hours of Operation
                </h2>
                <div className="bg-brand-light rounded-xl p-6">
                  <table className="w-full text-sm">
                    <tbody>
                      {hoursEntries.map((entry) => (
                        <tr key={entry.day} className="border-b border-gray-200 last:border-0">
                          <td className="py-2 font-medium text-brand-black">
                            {entry.day}
                          </td>
                          <td className="py-2 text-brand-gray text-right">
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
            <div>
              <div className="sticky top-24 bg-brand-light rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-brand-black">
                  Order Online
                </h2>
                <p className="text-sm text-brand-gray">
                  Order delivery from {location.name} at {location.mall} through
                  our delivery partners.
                </p>
                <div className="space-y-3">
                  <a
                    href={location.doordashUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Order on DoorDash
                  </a>
                  <a
                    href={location.uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    Order on Uber Eats
                  </a>
                </div>

                <hr className="border-gray-200" />

                <Button href="/menu" variant="outline" className="w-full">
                  View Menu
                </Button>
                <Button href="/locations" variant="ghost" className="w-full">
                  Back to All Locations
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with China Star Group for leasing inquiries, business partnerships, media requests, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or business inquiry? We'd love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-black mb-2">
                Send Us a Message
              </h2>
              <p className="text-brand-gray mb-8">
                Whether you&apos;re a landlord, potential partner, or member of the
                media, fill out the form below and our team will get back to you.
              </p>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div>
              <div className="bg-brand-light rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-brand-black mb-2">
                    General Inquiries
                  </h3>
                  <p className="text-sm text-brand-gray">{SITE_CONFIG.email}</p>
                  <p className="text-sm text-brand-gray">{SITE_CONFIG.phone}</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">
                    Leasing &amp; Real Estate
                  </h3>
                  <p className="text-sm text-brand-gray">
                    For mall leasing and new location inquiries, please use the
                    form and select &quot;Landlord / Leasing&quot; as your inquiry type.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">
                    Media &amp; Press
                  </h3>
                  <p className="text-sm text-brand-gray">
                    For press inquiries, interview requests, or media kits,
                    select &quot;Media / Press&quot; in the form.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-black mb-2">
                    Corporate Office
                  </h3>
                  <p className="text-sm text-brand-gray">
                    China Star Group
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

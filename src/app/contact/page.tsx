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
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Contact Us"
        subtitle="For inquiries regarding real estate, press, or corporate partnerships, please reach out below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 md:py-32 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-7xl mx-auto">

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4">
                  Inquiries
                </p>
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-6">
                  Send a <span className="italic text-brand-gray">Message</span>
                </h2>
                <p className="text-brand-gray font-light leading-relaxed">
                  Whether you are a developer, potential partner, or member of the media, please complete the form below and the appropriate department will respond promptly.
                </p>
              </div>

              <div className="bg-brand-charcoal border border-brand-gray/10 p-8 md:p-12 relative">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/50 m-2" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-gold/50 m-2" />
                <ContactForm />
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 space-y-12 pr-4 md:pr-0">
                {/* General */}
                <div className="border-l border-brand-gold/30 pl-6 hover:border-brand-gold transition-colors duration-500">
                  <h3 className="font-montserrat text-xs uppercase tracking-widest text-brand-light mb-4">
                    General Inquiries
                  </h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="block text-brand-gray hover:text-brand-gold transition-colors font-light mb-2">
                    {SITE_CONFIG.email}
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="block text-brand-gray hover:text-brand-gold transition-colors font-light">
                    {SITE_CONFIG.phone}
                  </a>
                </div>

                {/* Real Estate */}
                <div className="border-l border-brand-gray/20 pl-6 hover:border-brand-gold transition-colors duration-500">
                  <h3 className="font-montserrat text-xs uppercase tracking-widest text-brand-light mb-4">
                    Leasing &amp; Real Estate
                  </h3>
                  <p className="text-sm text-brand-gray font-light leading-relaxed">
                    For master developer and new location inquiries, please use the
                    form and select &quot;Landlord / Leasing&quot; as your inquiry type.
                  </p>
                </div>

                {/* Media */}
                <div className="border-l border-brand-gray/20 pl-6 hover:border-brand-gold transition-colors duration-500">
                  <h3 className="font-montserrat text-xs uppercase tracking-widest text-brand-light mb-4">
                    Media &amp; Press
                  </h3>
                  <p className="text-sm text-brand-gray font-light leading-relaxed">
                    For press inquiries, interview requests, or media kits,
                    select &quot;Media / Press&quot; in the form.
                  </p>
                </div>

                {/* Corporate */}
                <div className="border-l border-brand-gray/20 pl-6 hover:border-brand-gold transition-colors duration-500">
                  <h3 className="font-montserrat text-xs uppercase tracking-widest text-brand-light mb-4">
                    Corporate Office
                  </h3>
                  <p className="text-sm text-brand-gray font-light leading-relaxed">
                    China Star Group Holdings<br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

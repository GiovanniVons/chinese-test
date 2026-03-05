import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-brand-red">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Hungry? Find Your Nearest Location
        </h2>
        <p className="mt-4 text-lg text-red-100 max-w-xl mx-auto">
          Order from any of our 60+ locations through DoorDash or Uber Eats,
          or visit us in person at a mall near you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/locations"
            className="inline-flex items-center justify-center rounded-lg font-semibold px-8 py-4 text-lg border-2 border-white text-white hover:bg-brand-black hover:border-brand-black transition-colors"
          >
            Find a Location
          </a>
          <Button
            href="/careers"
            variant="ghost"
            size="lg"
            className="text-white hover:bg-red-800"
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}

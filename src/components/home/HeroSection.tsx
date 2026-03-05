import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-brand-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #B91C1C 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D97706 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-4">
            America&apos;s Premier Chinese Dining Group
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Authentic Flavors,{" "}
            <span className="text-brand-red">60+ Locations</span> Nationwide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            From our signature all-you-can-eat buffets to premium Asian grill concepts,
            China Star Group brings the best of Chinese and Pan-Asian cuisine to malls
            across America.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/locations" size="lg">
              Find a Location &amp; Order
            </Button>
            <Button href="/brands" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-black">
              Explore Our Brands
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

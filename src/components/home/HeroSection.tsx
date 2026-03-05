import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-brand-black overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
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
            <a
              href="/brands"
              className="inline-flex items-center justify-center rounded-lg font-semibold px-8 py-4 text-lg border-2 border-white text-white hover:bg-brand-black hover:border-brand-black transition-colors"
            >
              Explore Our Brands
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

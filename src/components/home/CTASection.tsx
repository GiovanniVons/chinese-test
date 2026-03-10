"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const container = useRef<HTMLElement>(null);
  const magneticButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = magneticButton.current;
    if (!button) return;

    // Magnetic button effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={container}
      className="relative py-32 md:py-48 bg-brand-charcoal overflow-hidden text-center"
    >
      {/* Subtle luxury background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-gold to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-brand-gold font-montserrat tracking-[0.3em] text-xs uppercase mb-8">
          The Journey Awaits
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-medium text-brand-light mb-8 leading-[1.1]">
          Discover Your <br /> Next <span className="italic text-brand-gray">Reservation</span>
        </h2>
        <p className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          Embark on a culinary adventure across America. Find a China Star Group location near you and experience hospitality redefined.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Magnetic Wrapper */}
          <div ref={magneticButton} className="inline-block p-4">
            <Button
              href="/locations"
              variant="primary"
              size="lg"
              className="px-12 py-6 rounded-none tracking-widest text-sm uppercase bg-brand-red text-brand-light hover:bg-brand-red flex items-center gap-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Find a Location</span>
              {/* Button hover sweep effect */}
              <div className="absolute inset-0 bg-brand-red-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            </Button>
          </div>

          <Button
            href="/careers"
            variant="ghost"
            size="lg"
            className="tracking-widest text-sm uppercase font-montserrat text-brand-gray hover:text-brand-light"
          >
            Join Our Atelier
          </Button>
        </div>
      </div>
    </section>
  );
}

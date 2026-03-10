"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image subtle scale in
      tl.from(".hero-bg", {
        scale: 1.05,
        duration: 2,
        opacity: 0,
        ease: "power2.inOut",
      });

      // Stagger text reveal
      tl.from(
        ".reveal-text",
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
        },
        "-=1"
      );

      // Button fade in
      tl.from(
        ".hero-btns",
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black pt-20"
    >
      {/* Background Layer with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 hero-bg origin-center">
        {/* Using a rich, textured or moody food/restaurant image */}
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=2000&q=80"
          alt="Luxury Dining Atmosphere"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div ref={textContainer} className="max-w-4xl">
          {/* Eyebrow */}
          <div className="overflow-hidden mb-6">
            <p className="reveal-text text-brand-gold font-montserrat tracking-[0.2em] text-xs md:text-sm uppercase flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-gold block"></span>
              Elevated Chinese Dining
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-medium text-brand-light leading-[1.1] tracking-tight">
            <div className="overflow-hidden pb-2">
              <span className="reveal-text block">A Symphony of</span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="reveal-text block text-brand-gold italic pr-4">Authentic Flavors</span>
            </div>
          </h1>

          {/* Subtext */}
          <div className="overflow-hidden mt-8 max-w-xl">
            <p className="reveal-text text-brand-gray text-lg md:text-xl font-light leading-relaxed">
              Experience the pinnacle of culinary artistry. With over 60 locations nationwide,
              China Star Group curates timeless traditions in a modern ambiance.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-btns mt-12 flex flex-col sm:flex-row items-center gap-6">
            <Button href="/locations" variant="primary" size="lg" className="w-full sm:w-auto px-10 rounded-none tracking-widest text-sm uppercase">
              Reserve a Table
            </Button>
            <Button href="/brands" variant="outline" size="lg" className="w-full sm:w-auto px-10 rounded-none tracking-widest text-sm uppercase">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hero-btns">
        <span className="text-[10px] uppercase tracking-widest text-brand-light font-montserrat">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
    </section>
  );
}

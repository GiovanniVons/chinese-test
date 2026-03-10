"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const stats = [
  { value: "60+", label: "Locations Nationwide" },
  { value: "25+", label: "Years of Excellence" },
  { value: "4", label: "Unique Brands" },
  { value: "1,500+", label: "Team Members" },
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function StatsSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative py-24 md:py-32 bg-brand-black overflow-hidden"
    >
      {/* Background Image / Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2000&q=80"
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-medium text-brand-gold mb-4">
                {stat.value}
              </div>
              <div className="h-[1px] w-12 bg-brand-red mx-auto mb-4" />
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-brand-light font-montserrat">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

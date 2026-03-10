"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Brand } from "@/lib/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function BrandOverviewCardsClient({ brands }: { brands: Brand[] }) {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Animate header
            gsap.from(".brand-header", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate cards staggering
            gsap.from(".brand-card", {
                scrollTrigger: {
                    trigger: ".brands-grid",
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.out"
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 md:py-32 bg-brand-black border-t border-brand-gray/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 brand-header">
                    <p className="text-brand-gold font-montserrat tracking-[0.2em] text-xs uppercase mb-4">
                        Our Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-brand-light leading-tight">
                        Curated Culinary <br /><span className="italic text-brand-gray">Experiences</span>
                    </h2>
                </div>

                <div className="brands-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-16 lg:gap-y-24">
                    {brands.map((brand, index) => (
                        <Link key={brand.id} href={`/brands/${brand.slug}`} className={`brand-card group block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
                            <Card className="h-full bg-transparent border-none p-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                <div className="w-full aspect-[4/5] bg-brand-charcoal mb-8 relative overflow-hidden flex items-center justify-center">
                                    {brand.imageUrl ? (
                                        <img
                                            src={brand.imageUrl}
                                            alt={brand.name}
                                            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    ) : (
                                        <span className="text-8xl font-cormorant font-light text-brand-gray/20 select-none z-0">
                                            {brand.name.charAt(0)}
                                        </span>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10" />

                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-black/40 backdrop-blur-[2px]">
                                        <span className="text-brand-gold border border-brand-gold px-6 py-3 font-montserrat uppercase tracking-[0.2em] text-xs">
                                            Explore Brand
                                        </span>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="flex items-baseline justify-between mb-3 gap-4">
                                        <h3 className="text-3xl font-cormorant font-medium text-brand-light group-hover:text-brand-gold transition-colors">
                                            {brand.name}
                                        </h3>
                                        <p className="text-xs uppercase tracking-widest text-brand-gold font-montserrat whitespace-nowrap">
                                            {brand.cuisineType}
                                        </p>
                                    </div>

                                    <p className="text-base text-brand-gray leading-relaxed mb-6 font-light">
                                        {brand.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {brand.features.slice(0, 3).map((feature) => (
                                            <Badge key={feature} label={feature} />
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

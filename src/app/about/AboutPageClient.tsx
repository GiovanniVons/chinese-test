"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Container from "@/components/ui/Container";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const milestones = [
    { year: "1998", title: "The Beginning", description: "First China Star opens in a vibrant food court. What started as a small family operation quickly gained a following for uncompromising flavor." },
    { year: "2005", title: "Regional Expansion", description: "The group expands across the region, establishing the foundation of our multi-brand hospitality vision." },
    { year: "2012", title: "Jade Wok Debuts", description: "Our second brand introduces a premium, made-to-order Pan-Asian concept, diversifying our culinary portfolio." },
    { year: "2016", title: "Lucky Bowl Express", description: "Launching our fast-casual concept, bringing expertly curated dishes to a broader audience without sacrificing quality." },
    { year: "2020", title: "Golden Dragon Grill", description: "Our high-end hibachi concept opens, redefining experiential dining within our market segment." },
    { year: "2025", title: "A National Presence", description: "Celebrating our 60th location opening, operating across 25+ states with over 1,500 dedicated team members." },
];

const values = [
    { title: "Culinary Integrity", description: "Every dish is prepared daily using fresh ingredients and time-honored techniques. We never compromise on authenticity or taste." },
    { title: "Atmosphere & Design", description: "We believe dining is an experience. Our spaces are crafted to provide a luxurious escape from the everyday." },
    { title: "Constant Evolution", description: "From our signature dishes to entirely new concepts, we continuously refine our offerings to meet sophisticated palates." },
    { title: "Our People", description: "The 1,500+ professionals across our group are the true artisans of our brand. We foster excellence and celebrate dedication." },
];

export default function AboutPageClient() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Intro Text Reveal
            gsap.from(".intro-text p", {
                scrollTrigger: {
                    trigger: ".intro-section",
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out"
            });

            // Timeline Animation
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top 60%",
                },
                x: -30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out"
            });

            // Values Grid Reveal
            gsap.from(".value-card", {
                scrollTrigger: {
                    trigger: ".values-section",
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="bg-brand-black text-brand-light min-h-screen">

            {/* Hero / Page Header Replacement */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-brand-gray/10">
                <div className="absolute inset-0 bg-brand-charcoal z-0" />
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-cormorant font-medium text-brand-light mb-6">
                            Our <span className="italic text-brand-gold">Heritage</span>
                        </h1>
                        <p className="text-lg md:text-xl font-montserrat font-light text-brand-gray tracking-wide max-w-2xl">
                            From a single restaurant to 60+ locations nationwide — the evolution of China Star Group.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Intro Storytelling */}
            <section className="intro-section py-24 md:py-32 bg-brand-black relative">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative group">
                            <div className="aspect-[4/5] bg-brand-charcoal overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent z-10" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                    <span className="text-9xl font-cormorant text-brand-gold">1998</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 intro-text max-w-3xl">
                            <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-10">
                                A Legacy in <br /><span className="italic text-brand-gray">Hospitality</span>
                            </h2>
                            <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-6 font-light">
                                China Star Group was founded in 1998 by immigrant entrepreneurs with a singular vision: to bring authentic, high-quality Chinese culinary experiences to a broader American audience.
                            </p>
                            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light">
                                What began as a single establishment has evolved into a premier restaurant group. Today, we curate four distinct brands across 60+ locations, serving countless guests with an uncompromising commitment to excellence and atmosphere.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Timeline */}
            <section className="timeline-section py-24 md:py-32 bg-brand-charcoal border-y border-brand-gray/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-1">
                            <p className="text-brand-gold font-montserrat tracking-[0.2em] text-xs uppercase mb-4">
                                The Journey
                            </p>
                            <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light">
                                Milestones
                            </h2>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="relative border-l border-brand-gold/30 ml-4 md:ml-0">
                                {milestones.map((milestone, index) => (
                                    <div key={milestone.year} className="timeline-item mb-16 last:mb-0 pl-8 md:pl-16 relative">
                                        <div className="absolute left-[-5px] top-2 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_10px_rgba(203,161,53,0.5)]" />
                                        <span className="block text-2xl font-cormorant text-brand-gold mb-2">
                                            {milestone.year}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-cormorant font-medium text-brand-light mb-3">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-base text-brand-gray leading-relaxed font-light max-w-2xl">
                                            {milestone.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="values-section py-24 md:py-32 bg-brand-black">
                <Container>
                    <div className="text-center mb-20">
                        <p className="text-brand-gold font-montserrat tracking-[0.2em] text-xs uppercase mb-4">
                            Core Tenets
                        </p>
                        <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-12">
                            Our <span className="italic text-brand-gray">Philosophy</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <div key={value.title} className="value-card group">
                                <div className="w-12 h-px bg-brand-gold mb-6 group-hover:w-full transition-all duration-700 ease-out" />
                                <h3 className="text-2xl font-cormorant font-medium text-brand-light mb-4 group-hover:text-brand-gold transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-brand-gray leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}

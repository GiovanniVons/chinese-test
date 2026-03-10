import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = createMetadata({
  title: "Our Heritage",
  description:
    "Learn about China Star Group — our history, mission, and the values that drive us to deliver exceptional Chinese dining across 60+ locations nationwide.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}

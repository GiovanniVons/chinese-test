export const SITE_CONFIG = {
  name: "China Star Group",
  tagline: "Premium Chinese Dining Across America",
  description:
    "China Star Group is a leading food and hospitality company operating 60+ restaurant locations in malls across the United States.",
  url: "https://www.chinastargroup.com",
  ogImage: "/images/og-image.jpg",
  email: "info@chinastargroup.com",
  phone: "(888) 888-8888",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Locations", href: "/locations" },
  { label: "Menu", href: "/menu" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATES: Record<string, string> = {
  AL: "Alabama", AZ: "Arizona", CA: "California", CO: "Colorado",
  CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  IL: "Illinois", IN: "Indiana", KS: "Kansas", KY: "Kentucky",
  LA: "Louisiana", MA: "Massachusetts", MD: "Maryland", MI: "Michigan",
  MN: "Minnesota", MO: "Missouri", NC: "North Carolina", NE: "Nebraska",
  NH: "New Hampshire", NJ: "New Jersey", NV: "Nevada", NY: "New York",
  OH: "Ohio", OR: "Oregon", PA: "Pennsylvania", SC: "South Carolina",
  TN: "Tennessee", TX: "Texas", VA: "Virginia", WA: "Washington",
  WI: "Wisconsin",
};

import fs from "fs";
import path from "path";
import type {
  Location,
  Brand,
  MenuData,
  NewsArticle,
  JobListing,
} from "./types";

const dataDir = path.join(process.cwd(), "data");

function readJson<T>(filename: string): T {
  const raw = fs.readFileSync(path.join(dataDir, filename), "utf-8");
  return JSON.parse(raw) as T;
}

// Locations
export function getLocations(): Location[] {
  return readJson<Location[]>("locations.json");
}

export function getLocationById(id: string): Location | undefined {
  return getLocations().find((loc) => loc.id === id);
}

export function getLocationsByBrand(brandId: string): Location[] {
  return getLocations().filter((loc) => loc.brandId === brandId);
}

export function getLocationsByState(state: string): Location[] {
  return getLocations().filter((loc) => loc.state === state);
}

export function getUniqueStates(): string[] {
  const states = new Set(getLocations().map((loc) => loc.state));
  return Array.from(states).sort();
}

// Brands
export function getBrands(): Brand[] {
  return readJson<Brand[]>("brands.json");
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return getBrands().find((b) => b.slug === slug);
}

export function getBrandById(id: string): Brand | undefined {
  return getBrands().find((b) => b.id === id);
}

// Menu
export function getMenu(): MenuData {
  return readJson<MenuData>("menu.json");
}

// News
export function getNews(): NewsArticle[] {
  const articles = readJson<NewsArticle[]>("news.json");
  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return getNews().find((a) => a.slug === slug);
}

// Jobs
export function getJobs(): JobListing[] {
  return readJson<JobListing[]>("jobs.json").filter((j) => j.isActive);
}

import { getBrands } from "@/lib/data";
import BrandOverviewCardsClient from "./BrandOverviewCardsClient";

export default function BrandOverviewCards() {
  const brands = getBrands();
  return <BrandOverviewCardsClient brands={brands} />;
}

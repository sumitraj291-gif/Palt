import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages.himachal;

export const metadata = createPageMetadata({
  title: "Himachal Pradesh Tour Packages from Haridwar | Pal Travels",
  description:
    "Plan a Himachal Pradesh tour from Haridwar with Pal Travels and explore Shimla, Manali and other popular Himalayan destinations.",
  path: "/tour-packages/himachal",
  absoluteTitle: true,
});

export default function HimachalTourPage() {
  return <TourPackageLanding data={data} />;
}

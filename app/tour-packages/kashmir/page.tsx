import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages.kashmir;

export const metadata = createPageMetadata({
  title: "Kashmir Tour Packages from Haridwar | Pal Travels",
  description:
    "Plan a Kashmir tour from Haridwar with comfortable travel arrangements for Srinagar, Gulmarg, Pahalgam and other popular destinations.",
  path: "/tour-packages/kashmir",
  absoluteTitle: true,
});

export default function KashmirTourPage() {
  return <TourPackageLanding data={data} />;
}

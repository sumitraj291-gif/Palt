import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages["delhi-agra"];

export const metadata = createPageMetadata({
  title: "Delhi & Agra Tour Packages from Haridwar | Pal Travels",
  description:
    "Explore Delhi and Agra from Haridwar with convenient taxi and tour services for sightseeing, family trips and cultural travel.",
  path: "/tour-packages/delhi-agra",
  absoluteTitle: true,
});

export default function DelhiAgraTourPage() {
  return <TourPackageLanding data={data} />;
}

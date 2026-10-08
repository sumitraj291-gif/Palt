import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages["jim-corbett"];

export const metadata = createPageMetadata({
  title: "Jim Corbett Tour Packages from Haridwar | Pal Travels",
  description:
    "Plan a Jim Corbett tour from Haridwar with comfortable taxi services, sightseeing support and convenient travel arrangements.",
  path: "/tour-packages/jim-corbett",
  absoluteTitle: true,
});

export default function JimCorbettTourPage() {
  return <TourPackageLanding data={data} />;
}

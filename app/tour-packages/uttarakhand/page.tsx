import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages.uttarakhand;

export const metadata = createPageMetadata({
  title: "Uttarakhand Tour Packages from Haridwar | Pal Travels",
  description:
    "Explore Uttarakhand with comfortable taxi and tour packages from Haridwar covering Rishikesh, Mussoorie, Nainital, Jim Corbett and other popular destinations.",
  path: "/tour-packages/uttarakhand",
  absoluteTitle: true,
});

export default function UttarakhandTourPage() {
  return <TourPackageLanding data={data} />;
}

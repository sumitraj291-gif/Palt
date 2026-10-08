import TourPackageLanding from "@/components/TourPackageLanding";
import { tourPackages } from "@/lib/tourPackages";
import { createPageMetadata } from "@/lib/seo";

const data = tourPackages.rajasthan;

export const metadata = createPageMetadata({
  title: "Rajasthan Tour Packages from Haridwar | Pal Travels",
  description:
    "Explore Rajasthan with tour and travel services from Haridwar covering Jaipur, Udaipur, Jodhpur and other popular destinations.",
  path: "/tour-packages/rajasthan",
  absoluteTitle: true,
});

export default function RajasthanTourPage() {
  return <TourPackageLanding data={data} />;
}

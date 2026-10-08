import type { MetadataRoute } from "next";

const baseUrl = "https://paltravel.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/contact",
    "/taxi-services",
    "/taxi-services/local",
    "/taxi-services/outstation",
    "/taxi-services/one-way",
    "/taxi-services/round-trip",
    "/taxi-services/tempo-traveller",
    "/taxi-services/haridwar-to-delhi",
    "/taxi-services/delhi-to-haridwar",
    "/taxi-services/haridwar-to-rishikesh",
    "/taxi-services/haridwar-to-dehradun",
    "/taxi-services/haridwar-to-mussoorie",
    "/taxi-services/haridwar-to-nainital",
    "/taxi-services/delhi-to-nainital",
    "/taxi-services/delhi-to-rishikesh",
    "/taxi-services/delhi-to-mussoorie",
    "/taxi-services/haridwar-to-jim-corbett",
    "/tour-packages",
    "/tour-packages/uttarakhand",
    "/tour-packages/himachal",
    "/tour-packages/kashmir",
    "/tour-packages/rajasthan",
    "/tour-packages/delhi-agra",
    "/tour-packages/jim-corbett",
    "/destinations",
    "/chardham-yatra",
    "/chardham-yatra/do-dham",
    "/chardham-yatra/helicopter",
    "/chardham-yatra/taxi-packages",
    "/chardham-yatra/package-details",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}

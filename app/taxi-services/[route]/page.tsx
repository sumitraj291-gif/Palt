import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RouteTaxiLanding from "@/components/RouteTaxiLanding";
import { createPageMetadata } from "@/lib/seo";
import { taxiRouteSlugs, taxiRoutes } from "@/lib/taxiRoutes";

export const dynamicParams = false;

export function generateStaticParams() {
  return taxiRouteSlugs.map((route) => ({ route }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>;
}): Promise<Metadata> {
  const { route: slug } = await params;
  const route = taxiRoutes[slug];

  if (!route) {
    notFound();
  }

  return createPageMetadata({
    title: route.title,
    description: route.description,
    path: `/taxi-services/${route.slug}`,
    absoluteTitle: true,
  });
}

export default async function TaxiRoutePage({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route: slug } = await params;
  const route = taxiRoutes[slug];

  if (!route) {
    notFound();
  }

  return <RouteTaxiLanding route={route} />;
}

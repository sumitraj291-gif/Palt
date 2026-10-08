import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChardhamLanding from "@/components/ChardhamLanding";
import { createPageMetadata } from "@/lib/seo";
import { chardhamPageSlugs, chardhamPages } from "@/lib/chardham";

export const dynamicParams = false;

export function generateStaticParams() {
  return chardhamPageSlugs
    .filter((slug) => slug !== "")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = chardhamPages[slug];

  if (!page) {
    notFound();
  }

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/chardham-yatra/${page.slug}`,
    absoluteTitle: true,
  });
}

export default async function ChardhamSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = chardhamPages[slug];

  if (!page || !page.slug) {
    notFound();
  }

  return <ChardhamLanding page={page} />;
}

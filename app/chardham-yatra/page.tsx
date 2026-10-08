import ChardhamLanding from "@/components/ChardhamLanding";
import { createPageMetadata } from "@/lib/seo";
import { chardhamPages } from "@/lib/chardham";

const page = chardhamPages[""];

export const metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/chardham-yatra",
  absoluteTitle: true,
});

export default function ChardhamPage() {
  return <ChardhamLanding page={page} />;
}

import type { Metadata } from "next";
import PagePlaceholder from "../components/PagePlaceholder";
import { getMeta } from "../lib/pageMeta";

const meta = getMeta("/thank-you/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://renoregen.com/thank-you/` },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Thank You"}
      intro={meta.description}
    />
  );
}

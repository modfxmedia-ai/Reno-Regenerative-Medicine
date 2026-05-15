import type { Metadata } from "next";
import PagePlaceholder from "../../components/PagePlaceholder";
import { getMeta } from "../../lib/pageMeta";

const meta = getMeta("/conditions/neck-pain/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://renoregen.com/conditions/neck-pain/` },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Neck Pain"}
      intro={meta.description}
    />
  );
}

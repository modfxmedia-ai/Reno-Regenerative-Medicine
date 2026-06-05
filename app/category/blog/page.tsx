import type { Metadata } from "next";
import PagePlaceholder from "../../components/PagePlaceholder";
import { getMeta } from "../../lib/pageMeta";

const meta = getMeta("/category/blog/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://www.renoregen.com/category/blog/` },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Blog"}
      intro={meta.description}
    />
  );
}

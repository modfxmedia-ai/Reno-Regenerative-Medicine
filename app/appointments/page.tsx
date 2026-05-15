import type { Metadata } from "next";
import PagePlaceholder from "../components/PagePlaceholder";
import { getMeta } from "../lib/pageMeta";

const meta = getMeta("/appointments/")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://renoregen.com/appointments/` },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Reno Regenerative Medicine"
      title={"Appointments"}
      intro={meta.description}
    />
  );
}

"use client";

import ServiceShell from "../components/ServiceShell";
import {
  ExactContent,
  ProcessSteps,
  ChecklistSection,
} from "../components/ServiceBlocks";

const PARAGRAPHS = [
  "Here at Reno Regenerative Medicine, we are proud to provide GAINSWave® services to our male patients struggling with sexual dysfunction. This treatment uses low-intensity sound waves, also known as acoustic wave therapy, to help deliver increased blood flow to the penis and improve sexual function with harder and more sustainable erections. This procedure has even proven to be helpful for those men who have erectile dysfunction and Peyronie's disease.",
  "While treatment times vary depending on your specific condition, most patients need 6 to 12 sessions for the treatment to be most effective. In each 15 to 20 minute session, we will be able to break up plaque that has formed in existing blood vessels, stimulate the generation of new blood vessels, and activate dormant stem cells that will also help with cell production. This process will increase blood flow and allow for enhanced sensitivity in the penis.",
];

const STEPS = [
  { n: "01", title: "15–20 Minute Session", body: "Discreet, in-office treatment with no anesthesia and no recovery time." },
  { n: "02", title: "Blood Vessel Stimulation", body: "Acoustic waves break up plaque and activate dormant stem cells." },
  { n: "03", title: "Lasting Results", body: "New vascular growth supports stronger, more reliable function over time." },
];

const QUALIFIERS = [
  "Erectile dysfunction (ED) — including cases that haven't responded to medication",
  "Peyronie's disease and plaque-related curvature",
  "Reduced sensitivity or weaker erections over time",
  "Looking for a drug-free, non-invasive option",
  "Want to avoid daily ED medications and their side effects",
  "Healthy men focused on long-term performance and prevention",
];

export default function GainswaveBody() {
  return (
    <ServiceShell>
      <div className="space-y-10">
        <ExactContent
          eyebrow="GAINSWave®"
          heading="Acoustic wave therapy for better sexual health"
          paragraphs={PARAGRAPHS}
        />
        <ProcessSteps heading="How GAINSWave® Works" steps={STEPS} />
        <ChecklistSection
          heading="Is GAINSWave® Right for You?"
          intro="GAINSWave® is most effective for men in the following situations:"
          items={QUALIFIERS}
        />
      </div>
    </ServiceShell>
  );
}

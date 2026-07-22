import { useMemo, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ClassificationBadge } from "../components/ui/ClassificationBadge";
import { REFERENCE_PROJECTS } from "../data/referenceProjects";
import { formatMwh } from "../lib/format";

const VESSEL_TYPES = ["Any", ...new Set(REFERENCE_PROJECTS.map((p) => p.matchCriteria.vesselType))];
const PROPULSIONS = ["Any", ...new Set(REFERENCE_PROJECTS.map((p) => p.matchCriteria.propulsion))];
const REGIONS = ["Any", ...new Set(REFERENCE_PROJECTS.map((p) => p.matchCriteria.region))];

export default function ReferenceMatcher() {
  const [vesselType, setVesselType] = useState("Any");
  const [propulsion, setPropulsion] = useState("Any");
  const [region, setRegion] = useState("Any");

  const matches = useMemo(() => {
    return REFERENCE_PROJECTS.map((p) => {
      let score = 0;
      if (vesselType === "Any" || p.matchCriteria.vesselType === vesselType) score += 1;
      if (propulsion === "Any" || p.matchCriteria.propulsion === propulsion) score += 1;
      if (region === "Any" || p.matchCriteria.region === region) score += 1;
      return { ...p, score };
    }).sort((a, b) => b.score - a.score);
  }, [vesselType, propulsion, region]);

  return (
    <div>
      <PageHeader
        eyebrow="Page 21"
        title="Reference Project Matcher"
        description="When a new opportunity appears, automatically identify the most relevant Corvus reference projects — matched on vessel type, propulsion, region, chemistry, and other criteria."
      />

      <Section title="New opportunity profile">
        <Card>
          <div className="grid gap-4 sm:grid-cols-3">
            <SelectField label="Vessel type" value={vesselType} onChange={setVesselType} options={VESSEL_TYPES} />
            <SelectField label="Propulsion" value={propulsion} onChange={setPropulsion} options={PROPULSIONS} />
            <SelectField label="Region" value={region} onChange={setRegion} options={REGIONS} />
          </div>
        </Card>
      </Section>

      <Section title="Matched reference projects" description="Ranked by criteria matched (out of 3). All projects below are already published in Corvus's own external company deck, so all are pre-approved for external/customer use.">
        <div className="space-y-4">
          {matches.map((p) => (
            <Card key={p.id} className={p.score === 3 ? "ring-2 ring-sky-300 dark:ring-sky-700" : ""}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{p.projectName}</div>
                  <div className="text-xs text-slate-400">{p.customer} · {p.vesselType} · {formatMwh(p.installedMwh)} · {p.deliveryYear}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone={p.score === 3 ? "emerald" : p.score >= 1 ? "sky" : "slate"}>{p.score}/3 match</Badge>
                  <ClassificationBadge classification={p.classification} />
                </div>
              </div>
              <div className="mt-3 grid gap-2 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-2">
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Why relevant: </span>{p.whyRelevant}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">How sales should use it: </span>{p.howSalesShouldUse}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Performance results: </span>{p.performanceResults}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">External-use approval needed: </span>{p.externalUseApprovalNeeded}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block text-sm">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span>
      <select
        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { SOURCE_LIST } from "../data/sources";

const DATA_ENTRY_TRIGGERS = [
  {
    trigger: "After a customer meeting",
    fields: [
      "Contacts met (name, title, role in purchasing) — feeds Executive Relationship Map",
      "Topics discussed, objections raised, competitor mentions — feeds Win-Loss / Account Risk",
      "Next planned interaction and owner — feeds Executive Relationship Map",
      "Any fleet expansion / follow-on vessel signals mentioned — feeds Fleet Expansion Predictor",
    ],
    owner: "Account manager, within 24 hours",
  },
  {
    trigger: "After a project win",
    fields: [
      "Full deal record: customer, vessel, capacity, products considered, competitors, final price, commercial terms — feeds Win-Loss Intelligence",
      "Decision criteria and why Corvus won — standardized reason category required",
      "Reference-use approval status (can this be published externally?) — feeds Reference Project Matcher",
      "Install date, chemistry, product line — feeds Installed-Base Replacement Scanner",
    ],
    owner: "Deal lead + sales operations, within 1 week of contract signature",
  },
  {
    trigger: "After a project loss, delay, or withdrawal",
    fields: [
      "Full deal record with standardized loss-reason category (same taxonomy as wins)",
      "Competitor that won, if known, and their offered terms if known",
      "Actions taken vs. actions that should have been taken",
      "Confirmed customer feedback vs. internal assumption — kept in separate fields, never merged",
    ],
    owner: "Deal lead, within 1 week of the decision — while memory is fresh",
  },
  {
    trigger: "After a service interaction (warranty claim, maintenance visit, complaint)",
    fields: [
      "Vessel, issue type, resolution, downtime incurred — feeds Installed-Base Replacement Scanner and Account Risk Monitor",
      "Customer sentiment as directly stated (not inferred) — feeds Account Risk Monitor evidence field",
      "Warranty/service-contract status and renewal date — feeds Replacement Scanner and Early-Warning Center",
    ],
    owner: "Service engineer, at ticket close",
  },
];

const PHASES = [
  {
    phase: "Phase 1 — Foundation (highest value, lowest cost, data already exists)",
    tone: "emerald",
    items: [
      { name: "Company / vessel / product master database", why: "Every other tool depends on this. Can be seeded today from public decks (as this prototype demonstrates) plus a CRM export." },
      { name: "Reference Project Matcher", why: "Data already exists in Corvus's own marketing materials; low build cost; immediate sales-enablement value." },
      { name: "Win-Loss Learning System (data-entry + basic reporting)", why: "Highest long-term ROI of any tool on this list, but requires zero new external data — only internal process adoption (see data-entry design above)." },
      { name: "Installed-Base Replacement Scanner (v1, portfolio-level)", why: "Real anchor data already exists (MF Ampere, FY2025 deliveries); vessel-level precision is a Phase 2 upgrade once telemetry is wired in." },
    ],
  },
  {
    phase: "Phase 2 — Expansion (requires new data pipelines or moderate build effort)",
    tone: "sky",
    items: [
      { name: "Partner Loyalty Tracker", why: "Requires a maintained competitor-project database beyond what's in a handful of decks — needs an ongoing intelligence-gathering process." },
      { name: "Customer & Account Risk Monitor", why: "Needs the Win-Loss and data-entry processes from Phase 1 to be live for at least 1-2 quarters before risk scores are meaningful." },
      { name: "Total-Cost-of-Ownership Calculator", why: "Calculation engine can be built now (as this prototype shows), but needs real Corvus cost data (installation, service costs) to replace generic assumptions." },
      { name: "Installed-Base Replacement Scanner (v2, vessel-level)", why: "Requires connecting the existing Vessel Information Portal / Digital SOH telemetry (which Corvus already operates) into this tool." },
      { name: "Executive Relationship Map", why: "Needs company-wide CRM adoption of the data-entry process before it has more than a handful of records." },
    ],
  },
  {
    phase: "Phase 3 — Advanced / requires new capabilities not yet in place",
    tone: "amber",
    items: [
      { name: "Competitor Hiring & Organizational Signals", why: "Requires a licensed job-posting/news-monitoring data feed — no source document or internal system currently provides this." },
      { name: "Fleet Expansion Predictor (automated)", why: "The analytical logic exists now, but automated detection of 'multi-stage electrification plans' requires ongoing public-record and news monitoring beyond static decks." },
      { name: "Competitor Response Simulator", why: "Valuable as a facilitated workshop tool now (as built); a data-driven, continuously-updated version needs the Phase 3 hiring/news feed first." },
      { name: "Commercial Early-Warning Center (full automation)", why: "The alert format and scoring logic exist now; full automation requires every upstream Phase 1-2 tool to be live with real, continuously-updated data." },
      { name: "Management Decision Simulator (with live financials)", why: "The comparison framework exists now; connecting real revenue/margin actuals requires finance-system integration." },
    ],
  },
];

export default function Methodology() {
  return (
    <div>
      <PageHeader
        eyebrow="Platform"
        title="Methodology, Data Entry & Roadmap"
        description="Source documents, the data-entry process Corvus employees should follow, and a phased build recommendation."
      />

      <Section title="Source documents used to build this prototype">
        <div className="grid gap-3 sm:grid-cols-2">
          {SOURCE_LIST.map((s) => (
            <Card key={s.id}>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s.shortName}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.title}</div>
              <div className="mt-2 text-[11px] text-slate-400">{s.org} · {s.date} · {s.pages} pages</div>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Every "Fact" record elsewhere in this platform cites one of these five documents. "Inference" records combine a cited fact with a disclosed assumption. "Illustrative Example" records use no source document at all and exist only to demonstrate tool mechanics — see the Overview page's provenance legend.
        </p>
      </Section>

      <Section title="Data-entry process for Corvus employees (item 16)" description="What to capture, when, and which downstream tool it feeds.">
        <div className="space-y-4">
          {DATA_ENTRY_TRIGGERS.map((t) => (
            <Card key={t.trigger}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.trigger}</div>
                <Badge tone="sky">{t.owner}</Badge>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {t.fields.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Card className="mt-4 border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-500/10">
          <div className="text-sm font-medium text-amber-800 dark:text-amber-300">Design principle</div>
          <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
            Every data-entry form should separate "confirmed customer feedback" from "internal assumption" as distinct fields (not a single free-text box), and require a standardized reason-category selection for wins/losses rather than free text alone — this is what makes the quarterly Win-Loss analysis and Account Risk scoring possible without manual re-coding later.
          </p>
        </Card>
      </Section>

      <Section title="Phased build recommendation (item 17)">
        <div className="space-y-4">
          {PHASES.map((p) => (
            <Card key={p.phase}>
              <Badge tone={p.tone}>{p.phase}</Badge>
              <div className="mt-3 space-y-2.5">
                {p.items.map((it) => (
                  <div key={it.name} className="border-l-2 border-slate-200 pl-3 dark:border-slate-700">
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{it.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{it.why}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

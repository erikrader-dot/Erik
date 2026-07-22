import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import DataTable from "../components/ui/DataTable";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import { ClassificationBadge, ConfidenceBadge } from "../components/ui/ClassificationBadge";
import { PARTNERS } from "../data/partners";
import { companyName } from "../data/companies";
import { badgeToneForStatus } from "../lib/schema";
import { formatPct } from "../lib/format";

export default function PartnerLoyalty() {
  const atRisk = PARTNERS.filter((p) => p.status === "At Risk" || p.status === "Declining");

  return (
    <div>
      <PageHeader
        eyebrow="Page 18"
        title="Partner Loyalty & Share-of-Partner Tracker"
        description="Tracks whether integrators, shipyards, designers, and fleet operators are increasing or decreasing their use of Corvus, using only what is documented in the reviewed sources — capped at the projects those sources actually show."
      />

      {atRisk.length > 0 && (
        <Section title="Alerts">
          <div className="grid gap-3 sm:grid-cols-2">
            {atRisk.map((p) => (
              <Card key={p.id} className="border-amber-200 dark:border-amber-900">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{companyName(p.companyId)}</div>
                  <Badge tone={badgeToneForStatus(p.status)}>{p.status}</Badge>
                </div>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{p.evidenceOfSwitching}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section title="Partner relationships">
        <DataTable
          getRowKey={(r) => r.id}
          initialSortKey="corvusShareOfKnownProjects"
          columns={[
            { key: "companyId", label: "Partner", render: (r) => (
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">{companyName(r.companyId)}</div>
                <div className="text-xs text-slate-400">{r.role}</div>
              </div>
            ) },
            { key: "totalKnownProjects", label: "Known Projects", align: "right" },
            { key: "corvusShareOfKnownProjects", label: "Corvus Share", align: "right", render: (r) => r.corvusShareOfKnownProjects != null ? formatPct(r.corvusShareOfKnownProjects) : "—" },
            { key: "mostRecentSupplierSelection", label: "Most Recent Selection" },
            { key: "status", label: "Status", noSort: true, render: (r) => <Badge tone={badgeToneForStatus(r.status)}>{r.status}</Badge> },
            { key: "confidence", label: "", noSort: true, render: (r) => <ConfidenceBadge confidence={r.confidence} /> },
          ]}
          rows={PARTNERS}
          onRowClick={() => {}}
        />
      </Section>

      <Section title="Relationship detail">
        <div className="space-y-4">
          {PARTNERS.map((p) => (
            <Card key={p.id + "-detail"}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{companyName(p.companyId)} <span className="font-normal text-slate-400">— {p.role}</span></div>
                <ClassificationBadge classification={p.classification} />
              </div>
              <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                <div><span className="text-xs font-medium uppercase text-slate-400">Evidence of switching</span><p className="mt-0.5 text-slate-600 dark:text-slate-400">{p.evidenceOfSwitching}</p></div>
                <div><span className="text-xs font-medium uppercase text-slate-400">Risk of losing preferred status</span><p className="mt-0.5 text-slate-600 dark:text-slate-400">{p.riskOfLosingPreferredStatus}</p></div>
                <div><span className="text-xs font-medium uppercase text-slate-400">Opportunity to become preferred</span><p className="mt-0.5 text-slate-600 dark:text-slate-400">{p.opportunityToBecomePreferred}</p></div>
                <div><span className="text-xs font-medium uppercase text-slate-400">Main segments / regions</span><p className="mt-0.5 text-slate-600 dark:text-slate-400">{p.mainSegments?.join(", ")} · {p.mainRegions?.join(", ")}</p></div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

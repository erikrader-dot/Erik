import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ClassificationBadge, ConfidenceBadge } from "../components/ui/ClassificationBadge";
import SourceTag from "../components/ui/SourceTag";
import { FLEET_EXPANSION_OPPORTUNITIES } from "../data/fleetExpansion";
import { companyName } from "../data/companies";

export default function FleetExpansion() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 17"
        title="Fleet Expansion Predictor"
        description="Identifies cases where a successful first vessel could lead to additional orders: standardized fleets, multi-stage electrification plans, and named follow-on programs."
      />

      <Section title="Fleet expansion opportunities & risks">
        <div className="space-y-4">
          {FLEET_EXPANSION_OPPORTUNITIES.map((fx) => (
            <Card key={fx.id}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{fx.initialProject}</div>
                  <div className="text-xs text-slate-400">{fx.operatorId && companyName(fx.operatorId)}</div>
                </div>
                <div className="flex items-center gap-2">
                  {fx.isCompetitorRisk && <Badge tone="rose">Competitor Risk</Badge>}
                  <Badge tone={fx.probability?.toString().startsWith("High") ? "emerald" : fx.probability?.toString().startsWith("Medium") ? "amber" : "slate"}>
                    {fx.probability}
                  </Badge>
                  <ConfidenceBadge confidence={fx.confidence} />
                  <ClassificationBadge classification={fx.classification} />
                </div>
              </div>

              <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <Field label="Follow-on vessels" value={fx.followOnVesselCount} />
                <Field label="Expected timing" value={fx.expectedTiming} />
                <Field label="Estimated total MWh" value={fx.estimatedTotalMwh} />
                <Field label="Estimated revenue range" value={fx.estimatedRevenueRange} />
                <Field label="Shipyard" value={fx.shipyardId ? companyName(fx.shipyardId) : "Not disclosed"} />
                <Field label="Designer" value={fx.designerId ? companyName(fx.designerId) : "Not disclosed"} />
                <Field label="Integrator" value={fx.integratorId ? companyName(fx.integratorId) : "Not disclosed"} />
                <Field label="Likely competitors" value={fx.likelyCompetitors?.join(", ")} />
              </div>

              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">Basis: </span>
                {fx.probabilityBasis}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <ListField label="Actions to become fleet standard" items={fx.actionsToBecomeFleetStandard} />
                <ListField label="Proof points to collect" items={fx.proofPointsToCollect} />
                <ListField label="Customer results to document" items={fx.customerResultsToDocument} />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>Key decision-makers: {fx.keyDecisionMakers}</span>
                <span className="flex gap-1">{fx.sourceIds.map((s) => <SourceTag key={s} sourceId={s} />)}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-0.5 text-slate-700 dark:text-slate-300">{value || "—"}</div>
    </div>
  );
}

function ListField({ label, items }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</div>
      <ul className="mt-1 space-y-1 text-xs text-slate-600 dark:text-slate-400">
        {(items || []).map((it) => (
          <li key={it} className="flex gap-1.5">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

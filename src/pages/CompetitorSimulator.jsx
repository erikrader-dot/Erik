import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ConfidenceBadge } from "../components/ui/ClassificationBadge";
import { SCENARIOS } from "../data/scenarios";
import { companyName } from "../data/companies";

export default function CompetitorSimulator() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 25 — “What Would the Competitor Do?”"
        title="Competitor Response Simulator"
        description="Evaluates how competitors may respond to proposed Corvus actions. This entire page is scenario analysis, not verified fact — evidence is cited wherever a real documented competitor statement or behavior grounds the prediction."
      />

      <div className="space-y-6">
        {SCENARIOS.map((s) => (
          <Card key={s.id}>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Proposed Corvus action</div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.proposedAction}</p>

            <div className="mt-4 space-y-3">
              {s.responses.map((r, i) => (
                <div key={i} className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{companyName(r.companyId)}</div>
                    <div className="flex items-center gap-2">
                      <Badge tone="violet">{r.probability}</Badge>
                      <ConfidenceBadge confidence={r.confidence} />
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">{r.likelyResponse}</p>
                  <p className="mt-1.5 text-[11px] text-slate-400"><span className="font-medium">Evidence: </span>{r.evidence}</p>
                  <p className="mt-1 text-[11px] text-slate-400"><span className="font-medium">Market impact: </span>{r.marketImpact}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div>
                <div className="text-[11px] font-medium uppercase text-slate-400">Unintended consequences</div>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{s.unintendedConsequences}</p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase text-slate-400">Recommended preparation</div>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{s.recommendedPreparation}</p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase text-slate-400">Indicators to watch</div>
                <ul className="mt-0.5 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {s.indicatorsToWatch.map((ind) => <li key={ind}>· {ind}</li>)}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

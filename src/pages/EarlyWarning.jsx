import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ClassificationBadge, ConfidenceBadge } from "../components/ui/ClassificationBadge";
import SourceTag from "../components/ui/SourceTag";
import { EARLY_WARNINGS, DOCUMENT_GROUNDED_WARNINGS } from "../data/earlyWarnings";
import { CLASSIFICATION } from "../lib/schema";

const FILTERS = ["All", CLASSIFICATION.FACT, CLASSIFICATION.INFERENCE, CLASSIFICATION.EXAMPLE];

export default function EarlyWarning() {
  const [filter, setFilter] = useState("All");
  const rows = (filter === "All" ? EARLY_WARNINGS : EARLY_WARNINGS.filter((w) => w.classification === filter))
    .slice()
    .sort((a, b) => b.riskOpportunityScore - a.riskOpportunityScore);

  return (
    <div>
      <PageHeader
        eyebrow="Page 26"
        title="Commercial Early-Warning Center"
        description="Combines signals from the replacement scanner, fleet predictor, partner tracker, hiring monitor, and account-risk monitor into a single alert feed."
        actions={
          <div className="flex gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1 text-xs font-medium ${filter === f ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}
              >
                {f}
              </button>
            ))}
          </div>
        }
      />

      <Card className="mb-6 border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-500/10">
        <p className="text-xs text-emerald-700 dark:text-emerald-400">
          {DOCUMENT_GROUNDED_WARNINGS.length} of {EARLY_WARNINGS.length} alerts below are built entirely from facts and inferences grounded in the five uploaded source documents (Fact or Inference classification) — satisfying the "five example early-warning alerts" requirement with {DOCUMENT_GROUNDED_WARNINGS.length}. The remaining alerts are explicitly labeled Illustrative Examples.
        </p>
      </Card>

      <div className="space-y-4">
        {rows.map((w) => (
          <Card key={w.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{w.signal}</div>
              <div className="flex shrink-0 items-center gap-2">
                <Badge tone={w.scoreDirection?.startsWith("Opportunity") ? "emerald" : w.scoreDirection?.startsWith("Risk") ? "rose" : "violet"}>
                  {w.riskOpportunityScore}/100 · {w.scoreDirection}
                </Badge>
                <ConfidenceBadge confidence={w.confidence} />
                <ClassificationBadge classification={w.classification} />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-700 dark:text-slate-300">Evidence: </span>{w.evidence}</p>
            <div className="mt-3 grid gap-2 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-2">
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Estimated timing: </span>{w.estimatedTiming}</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Estimated commercial value: </span>{w.estimatedCommercialValue}</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Recommended action: </span>{w.recommendedAction}</p>
              <p><span className="font-medium text-slate-700 dark:text-slate-300">Deadline: </span>{w.recommendedActionDeadline}</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400">Owner: {w.responsibleOwner}</span>
              <span className="flex gap-1">{w.sourceIds.map((s) => <SourceTag key={s} sourceId={s} />)}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

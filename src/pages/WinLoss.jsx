import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StatCard";
import Badge from "../components/ui/Badge";
import { ClassificationBadge } from "../components/ui/ClassificationBadge";
import { WIN_LOSS_RECORDS, STANDARD_REASON_CATEGORIES } from "../data/winLoss";

export default function WinLoss() {
  const wins = WIN_LOSS_RECORDS.filter((r) => r.outcome === "Win").length;
  const losses = WIN_LOSS_RECORDS.filter((r) => r.outcome === "Loss").length;
  const winRate = WIN_LOSS_RECORDS.length ? wins / (wins + losses) : null;
  const reasonCounts = {};
  WIN_LOSS_RECORDS.forEach((r) => { reasonCounts[r.mainReasonCategory] = (reasonCounts[r.mainReasonCategory] || 0) + 1; });

  return (
    <div>
      <PageHeader
        eyebrow="Page 20"
        title="Win-Loss Intelligence"
        description="A structured database for deals Corvus wins, loses, delays, or withdraws from — with standardized reason categories for quarterly analysis."
      />

      <Card className="mb-6 border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-500/10">
        <div className="text-sm font-medium text-amber-800 dark:text-amber-300">Composite illustrative data</div>
        <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
          No source document contains real deal records (price, objections, win/loss reason — that data lives in Corvus's CRM). Every record below uses a fictional customer/vessel identity to avoid attaching a fabricated outcome to a real company; competitor names are real where the underlying dynamic (e.g. AYK's fast-delivery marketing) is documented.
        </p>
      </Card>

      <Section title="Quarterly summary (illustrative sample)">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Records" value={WIN_LOSS_RECORDS.length} />
          <StatCard label="Win rate" value={winRate != null ? `${Math.round(winRate * 100)}%` : "—"} tone={winRate >= 0.5 ? "emerald" : "amber"} />
          <StatCard label="Most common loss reason" value={Object.entries(reasonCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—"} />
          <StatCard label="Reason categories tracked" value={STANDARD_REASON_CATEGORIES.length} />
        </div>
      </Section>

      <Section title="Deal records">
        <div className="space-y-4">
          {WIN_LOSS_RECORDS.map((r) => (
            <Card key={r.id}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{r.vessel} — {r.vesselType}</div>
                <div className="flex items-center gap-2">
                  <Badge tone={r.outcome === "Win" ? "emerald" : r.outcome === "Loss" ? "rose" : "amber"}>{r.outcome}</Badge>
                  <Badge tone="sky">{r.mainReasonCategory}</Badge>
                  <ClassificationBadge classification={r.classification} />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-400">{r.customer} · {r.geography} · {r.batteryCapacityMwh} MWh · Competitors: {r.competitors.join(", ")}</div>
              <div className="mt-3 grid gap-2 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-2">
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Objections: </span>{r.customerObjections}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Lessons learned: </span>{r.lessonsLearned}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Actions that should have been taken: </span>{r.actionsThatShouldHaveBeenTaken}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Confirmed customer feedback: </span>{r.confirmedCustomerFeedback}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Standardized reason categories">
        <div className="flex flex-wrap gap-2">
          {STANDARD_REASON_CATEGORIES.map((c) => <Badge key={c} tone="slate">{c}</Badge>)}
        </div>
      </Section>
    </div>
  );
}

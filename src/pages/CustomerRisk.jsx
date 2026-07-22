import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ClassificationBadge } from "../components/ui/ClassificationBadge";
import { ACCOUNT_RISKS } from "../data/accountRisk";

function scoreTone(score) {
  if (score >= 70) return "rose";
  if (score >= 45) return "amber";
  return "emerald";
}

export default function CustomerRisk() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 22"
        title="Customer & Account Risk Monitor"
        description="Monitors signs an existing or target customer may reduce business with Corvus. No dissatisfaction is inferred without a cited signal — risk score 0-100."
      />

      <Section title="Account risk scores">
        <div className="space-y-4">
          {ACCOUNT_RISKS.map((r) => (
            <Card key={r.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{r.accountName}</div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className={`h-full ${scoreTone(r.riskScore) === "rose" ? "bg-rose-500" : scoreTone(r.riskScore) === "amber" ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${r.riskScore}%` }} />
                    </div>
                    <Badge tone={scoreTone(r.riskScore)}>{r.riskScore}/100</Badge>
                  </div>
                  <ClassificationBadge classification={r.classification} />
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {r.signals.map((s, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 p-2.5 text-xs dark:bg-slate-800/50">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{s.type}: </span>
                    <span className="text-slate-500 dark:text-slate-400">{s.evidence}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-2">
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Commercial impact: </span>{r.commercialImpact}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Urgency: </span>{r.urgency}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Recommended response: </span>{r.recommendedResponse}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Next action: </span>{r.nextAction}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

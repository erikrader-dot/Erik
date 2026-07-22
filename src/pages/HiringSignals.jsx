import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import DataTable from "../components/ui/DataTable";
import Card from "../components/ui/Card";
import { ClassificationBadge, ConfidenceBadge } from "../components/ui/ClassificationBadge";
import { JOB_POSTINGS, HIRING_PATTERN_GUIDANCE } from "../data/jobPostings";
import { companyName } from "../data/companies";

export default function HiringSignals() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 19"
        title="Competitor Hiring & Organizational Signals"
        description="Monitors public job postings, executive appointments, and organizational changes for evidence of competitor strategy."
      />

      <Card className="mb-6 border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-500/10">
        <div className="text-sm font-medium text-amber-800 dark:text-amber-300">No live job-posting feed in this prototype</div>
        <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
          None of the five source documents contain job-posting data. Every row below is an Illustrative Example showing the signal type this tool is built to track — except where noted, none is an observed real posting. {HIRING_PATTERN_GUIDANCE}
        </p>
      </Card>

      <Section title="Hiring signals">
        <DataTable
          getRowKey={(r) => r.id}
          columns={[
            { key: "role", label: "Role" },
            { key: "companyId", label: "Competitor", render: (r) => companyName(r.companyId) },
            { key: "location", label: "Location" },
            { key: "department", label: "Department" },
            { key: "confidence", label: "Confidence", noSort: true, render: (r) => <ConfidenceBadge confidence={r.confidence} /> },
            { key: "classification", label: "", noSort: true, render: (r) => <ClassificationBadge classification={r.classification} /> },
          ]}
          rows={JOB_POSTINGS}
        />
      </Section>

      <Section title="Signal detail">
        <div className="space-y-3">
          {JOB_POSTINGS.map((j) => (
            <Card key={j.id + "-d"}>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{j.role} — {companyName(j.companyId)}</div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400"><span className="font-medium">Strategy signal: </span>{j.strategySignal}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400"><span className="font-medium">Possible impact: </span>{j.possibleImpact}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400"><span className="font-medium">Recommended action: </span>{j.recommendedAction}</p>
              <p className="mt-1.5 text-[11px] italic text-slate-400">{j.disclaimer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { DECISION_COMPARISONS } from "../data/decisionOptions";

const CRITERIA = [
  ["revenuePotential", "Revenue Potential"],
  ["marginPotential", "Margin Potential"],
  ["requiredInvestment", "Required Investment"],
  ["timeToMarket", "Time to Market"],
  ["competitiveResponse", "Competitive Response"],
  ["executionDifficulty", "Execution Difficulty"],
  ["technicalRisk", "Technical Risk"],
  ["regulatoryRisk", "Regulatory Risk"],
  ["partnerDependency", "Partner Dependency"],
  ["brandImpact", "Brand Impact"],
  ["fiveYearStrategicValue", "5-Year Strategic Value"],
];

export default function DecisionSimulator() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 27"
        title="Management Decision Simulator"
        description="Compares strategic choices side by side. Ratings are analytical judgments for scenario planning, grounded in real facts where noted — not verified financial projections."
      />

      <div className="space-y-8">
        {DECISION_COMPARISONS.map((d) => (
          <Card key={d.id}>
            <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{d.topic}</div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{d.context}</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-max text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase text-slate-400">
                    <th className="py-1.5 pr-4">Criteria</th>
                    {d.options.map((o) => <th key={o.name} className="py-1.5 pr-4 font-semibold text-slate-600 dark:text-slate-300">{o.name}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {CRITERIA.map(([key, label]) => (
                    <tr key={key}>
                      <td className="py-1.5 pr-4 text-xs font-medium text-slate-500 dark:text-slate-400">{label}</td>
                      {d.options.map((o) => <td key={o.name} className="py-1.5 pr-4 text-xs text-slate-700 dark:text-slate-300">{o[key]}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-lg bg-sky-50 p-3 dark:bg-sky-500/10">
              <Badge tone="sky">Recommended</Badge>
              <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300">{d.recommendedOption}</p>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400"><span className="font-medium">Assumptions that could change this: </span>{d.assumptionsThatCouldChange}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

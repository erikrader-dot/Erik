import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import StatCard from "../components/ui/StatCard";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Icon from "../components/ui/Icon";
import { NAV_GROUPS } from "../lib/nav";
import { COMPANIES } from "../data/companies";
import { MBF_MARKET_STATS } from "../data/certifications";
import { EU_FERRY_MARKET } from "../data/euFerryMarket";
import { DOCUMENT_GROUNDED_WARNINGS } from "../data/earlyWarnings";
import { badgeToneForClassification } from "../lib/schema";
import { formatMwh, formatNumber, formatPct } from "../lib/format";

const corvus = COMPANIES.find((c) => c.id === "corvus");
const toolPages = NAV_GROUPS.filter((g) => g.label !== "Overview" && g.label !== "Platform").flatMap((g) => g.items);

export default function Overview() {
  const topWarnings = [...DOCUMENT_GROUNDED_WARNINGS].sort((a, b) => b.riskOpportunityScore - a.riskOpportunityScore).slice(0, 4);

  return (
    <div>
      <PageHeader
        eyebrow="Corvus Sales Intelligence"
        title="Command Center"
        description="A prototype of the advanced high-value intelligence and sales suite, seeded with facts drawn from five uploaded source documents plus clearly-labeled illustrative examples. Every record below carries a provenance badge — hover any badge for what it means."
      />

      <Section title="Corvus at a glance" description="From Corvus's own 2026 company presentation.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <StatCard label="Market share (self-reported)" value={formatPct(0.5)} sub=">75 customers, all largest integrators/yards" tone="sky" />
          <StatCard label="Installed base" value={formatMwh(corvus.stats.mwhSold)} sub={`${formatNumber(corvus.stats.projects)} projects`} tone="emerald" />
          <StatCard label="Operating hours" value={`${formatNumber(corvus.stats.operatingHours / 1000000, { maximumFractionDigits: 1 })}M+`} sub="Across the full install base" />
          <StatCard label="FY2025 revenue" value="$160M+" sub="Positive EBITDA, $60M growth capital raised" tone="emerald" />
          <StatCard label="MBF type-approval rank" value="#1 of 118" sub="20 of 225 active approvals (~9% share)" tone="sky" />
        </div>
      </Section>

      <Section title="Market context" description="EU battery-ferry market (MBF, Dec 2024) and global MBF Ship Register (Q3 2026) — market sizing only, no named accounts in these two sources.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="EU battery ferries" value={formatNumber(EU_FERRY_MARKET.totalFerriesExact)} sub="MBF Ship Register, Dec 2024" />
          <StatCard label="EU installed capacity" value={formatMwh(EU_FERRY_MARKET.cumulativeCapacityMwh2024)} sub="Roughly doubled in 2024 alone" />
          <StatCard label="Global battery-ship fleet" value={formatNumber(MBF_MARKET_STATS.shipRegister.totalShips)} sub={`${formatMwh(MBF_MARKET_STATS.shipRegister.totalCapacityMwh)} total capacity`} />
          <StatCard label="Europe + Norway share" value={formatPct(MBF_MARKET_STATS.shipRegister.europeNorwayShareOfFleet)} sub="Of the global battery-vessel fleet" />
        </div>
      </Section>

      <Section title="Top early-warning signals" description="Highest-scored document-grounded alerts. See the Commercial Early-Warning Center for the full list." actions={<Link to="/early-warning" className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400">View all →</Link>}>
        <div className="grid gap-3 sm:grid-cols-2">
          {topWarnings.map((w) => (
            <Card key={w.id} className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{w.signal}</div>
                <Badge tone={badgeToneForClassification(w.classification)}>{w.classification}</Badge>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{w.recommendedAction}</div>
              <div className="mt-1 text-xs font-semibold text-slate-400">Score {w.riskOpportunityScore}/100 · {w.scoreDirection}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Advanced intelligence tools">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {toolPages.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-700"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <Icon name={item.icon} />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900 group-hover:text-sky-700 dark:text-slate-100 dark:group-hover:text-sky-400">{item.label}</div>
                <div className="text-xs text-slate-400">Page {item.page}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="How to read this prototype" className="mb-2">
        <Card>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <Badge tone="emerald">Fact</Badge>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">Directly stated in a cited source document.</p>
            </div>
            <div>
              <Badge tone="amber">Inference</Badge>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">A reasoned estimate built on documented facts — not itself stated in a source.</p>
            </div>
            <div>
              <Badge tone="slate">Illustrative Example</Badge>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">Synthetic sample data showing how a tool works. Replace with real CRM/field data before commercial use.</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            See the <Link to="/methodology" className="font-medium text-sky-600 hover:underline dark:text-sky-400">Methodology, Data Entry &amp; Roadmap</Link> page for source documents, the data-entry process for Corvus employees, and a phased build recommendation.
          </p>
        </Card>
      </Section>
    </div>
  );
}

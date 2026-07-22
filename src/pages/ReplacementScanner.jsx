import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StatCard";
import DataTable from "../components/ui/DataTable";
import { ClassificationBadge, ConfidenceBadge } from "../components/ui/ClassificationBadge";
import SourceTag from "../components/ui/SourceTag";
import { INSTALLED_SYSTEMS } from "../data/installedSystems";
import { REPLACEMENT_FORECAST, FORECAST_TOTAL_MWH, FORECAST_TOTAL_REVENUE_USD } from "../data/replacementForecast";
import { CORVUS_TYPE_APPROVALS, EXPIRING_COMPETITOR_CERTIFICATES } from "../data/certifications";
import { ASSUMPTIONS } from "../data/assumptions";
import { companyName } from "../data/companies";
import { formatMwh, formatUsd, formatNumber } from "../lib/format";

export default function ReplacementScanner() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 16"
        title="Installed-Base Replacement Scanner"
        description="Identifies vessels that may need battery, module, control-system, BMS, cooling, cybersecurity, or safety-system upgrades, warranty/service renewals, or recycling/second-life support — with every replacement-timing estimate explicitly labeled as an inference, never a confirmed need."
      />

      <Section title="Installed base — replacement timing assessment">
        <DataTable
          getRowKey={(r) => r.id}
          initialSortKey="estimatedAgeYears"
          columns={[
            { key: "vesselName", label: "Vessel / Fleet", render: (r) => (
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">{r.vesselName}</div>
                <div className="text-xs text-slate-400">{r.operatorName}</div>
              </div>
            ) },
            { key: "originalSupplierId", label: "Original Supplier", render: (r) => companyName(r.originalSupplierId) },
            { key: "installedMwh", label: "Installed", render: (r) => typeof r.installedMwh === "number" ? formatMwh(r.installedMwh) : (r.installedMwh || "Not disclosed") },
            { key: "estimatedAgeYears", label: "Age", render: (r) => (r.estimatedAgeYears != null ? `${r.estimatedAgeYears} yrs` : "Unknown") },
            { key: "possibleReplacementYear", label: "Est. Replacement Year", render: (r) => r.possibleReplacementYear ?? "Insufficient data" },
            { key: "estimatedRevenueOpportunityUsd", label: "Est. Revenue", align: "right", render: (r) => (r.estimatedRevenueOpportunityUsd ? formatUsd(r.estimatedRevenueOpportunityUsd) : "—") },
            { key: "confidence", label: "Confidence", noSort: true, render: (r) => <ConfidenceBadge confidence={r.confidence} /> },
            { key: "classification", label: "", noSort: true, render: (r) => <ClassificationBadge classification={r.classification} /> },
          ]}
          rows={INSTALLED_SYSTEMS}
        />
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Rows with "Insufficient data" carry no replacement-year estimate — per platform policy, no system is labeled as needing replacement without evidence. Includes one competitor-installed vessel (Saint-Malo, AYK) tracked as a win-back candidate, not a Corvus install.
        </p>
      </Section>

      <Section
        title="Annual replacement-opportunity forecast, 2027-2036"
        description="Portfolio-level model output (Inference), not a vessel-by-vessel forecast. See methodology below."
      >
        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="10-yr replacement-eligible MWh" value={formatMwh(FORECAST_TOTAL_MWH)} tone="amber" />
          <StatCard label="10-yr estimated revenue" value={formatUsd(FORECAST_TOTAL_REVENUE_USD)} tone="amber" />
          <StatCard label="Blended ASP assumption" value={formatUsd(ASSUMPTIONS.blendedAspPerMwhUsd.value)} sub="per MWh — derived, see below" />
          <StatCard label="Calendar-life assumption" value={`${ASSUMPTIONS.typicalCalendarLifeYears.value} yrs`} sub="Generic planning assumption" />
        </div>
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-end gap-2 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900" style={{ height: 220 }}>
            {REPLACEMENT_FORECAST.map((row) => {
              const maxMwh = Math.max(...REPLACEMENT_FORECAST.map((r) => r.estimatedReplacementEligibleMwh));
              const heightPct = Math.max(4, (row.estimatedReplacementEligibleMwh / maxMwh) * 100);
              return (
                <div key={row.year} className="flex w-16 flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300">{formatNumber(row.estimatedReplacementEligibleMwh)}</div>
                  <div className="w-8 rounded-t bg-amber-400 dark:bg-amber-500" style={{ height: `${heightPct}%` }} />
                  <div className="text-[11px] text-slate-400">{row.year}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Card className="mt-4">
          <div className="text-sm font-medium text-slate-900 dark:text-slate-100">Methodology (fully disclosed)</div>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Two real, disclosed anchors exist: MF Ampere's 2015 delivery (Corvus's first) and FY2025 deliveries of 300 MWh. No source document gives a year-by-year delivery history, so one is reconstructed as an illustrative growth curve between those anchors, then shifted forward by the {ASSUMPTIONS.typicalCalendarLifeYears.value}-year generic replacement-cycle assumption. Because Corvus's installed base grew rapidly in recent years (FY2025 alone = ~21% of all-time cumulative MWh), most of today's fleet is too young to reach replacement age within this 10-year window — the forecast rises through the 2030s as that recent growth wave ages, rather than showing a large near-term wave.
          </p>
        </Card>
      </Section>

      <Section title="Corvus's own type-approval portfolio" description="From the MBF Q3'26 Technology Report — Corvus's complete 20-certificate record, the report's most granular Corvus-specific dataset.">
        <DataTable
          getRowKey={(r) => r.certificate}
          initialSortKey="expires"
          columns={[
            { key: "product", label: "Product" },
            { key: "chemistry", label: "Chemistry" },
            { key: "society", label: "Class Society" },
            { key: "country", label: "Country" },
            { key: "approved", label: "Approved" },
            { key: "expires", label: "Expires" },
          ]}
          rows={CORVUS_TYPE_APPROVALS}
        />
      </Section>

      <Section title="Competitor certificates expiring within 6 months" description="Real, named renewal-outreach signals from the MBF report — a lapse could open bid eligibility gaps for these competitors.">
        <DataTable
          getRowKey={(r) => r.company + r.product}
          initialSortKey="daysLeft"
          initialSortDir="asc"
          columns={[
            { key: "company", label: "Company" },
            { key: "product", label: "Product" },
            { key: "expires", label: "Expires" },
            { key: "daysLeft", label: "Days Left", align: "right" },
          ]}
          rows={EXPIRING_COMPETITOR_CERTIFICATES}
        />
      </Section>

      <Section title="Data required to operate this tool for real (item 13)">
        <Card>
          <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
            Everything above is built from two public marketing decks and one industry data bulletin. To run this scanner for real, Corvus needs a data feed with:
          </p>
          <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-2">
            {[
              "Per-vessel install date, chemistry, and exact product/model",
              "Per-vessel installed MWh and module count",
              "Operating-hours and duty-cycle telemetry — Corvus's own Vessel Information Portal / Digital SOH monitoring already collects this; it needs to feed this tool",
              "Maintenance and service-ticket history per vessel",
              "Warranty and service-contract terms and expiry dates per account",
              "Actual (not blended) selling price by deal, for accurate revenue estimates",
              "Competitive-bid intelligence: who else bid, and win/loss outcome",
              "Class-society type-approval renewal status per installed product",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <div className="flex flex-wrap gap-2 text-xs text-slate-400">
        Sources: <SourceTag sourceId="corvus_presentation_2026" /> <SourceTag sourceId="mbf_tech_2026q3" /> <SourceTag sourceId="ayk_intro_eac" />
      </div>
    </div>
  );
}

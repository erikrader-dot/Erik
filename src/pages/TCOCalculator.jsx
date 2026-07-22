import { useMemo, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StatCard";
import Badge from "../components/ui/Badge";
import { TCO_DEFAULTS, TCO_DISCLAIMER } from "../data/tco";
import { computeTco } from "../lib/tco";
import { formatUsd } from "../lib/format";

function NumberField({ label, value, onChange, suffix, step = 1 }) {
  return (
    <label className="block text-sm">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span>
      <div className="mt-1 flex items-center gap-2">
        <input
          type="number"
          step={step}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix && <span className="shrink-0 text-xs text-slate-400">{suffix}</span>}
      </div>
    </label>
  );
}

export default function TCOCalculator() {
  const [supplier, setSupplier] = useState("corvus");
  const [mwh, setMwh] = useState(20);
  const [vesselLifeYears, setVesselLifeYears] = useState(TCO_DEFAULTS.generic.vesselLifeYears.value);
  const [operatingHoursPerYear, setOperatingHoursPerYear] = useState(4000);
  const [cyclesPerYear, setCyclesPerYear] = useState(300);
  const [downtimeDaysPerYear, setDowntimeDaysPerYear] = useState(TCO_DEFAULTS.generic.expectedDowntimeDaysPerYear.value);

  const systemCostPerMwh = supplier === "corvus" ? TCO_DEFAULTS.corvus.systemCostPerMwhUsd : (TCO_DEFAULTS.competitorRange.systemCostPerMwhLowUsd + TCO_DEFAULTS.competitorRange.systemCostPerMwhHighUsd) / 2;

  const inputs = {
    mwh,
    systemCostPerMwh,
    installationPct: TCO_DEFAULTS.generic.installationCostPctOfSystem.value * 100,
    engineeringPct: TCO_DEFAULTS.generic.engineeringCostPctOfSystem.value * 100,
    integrationPct: TCO_DEFAULTS.generic.integrationCostPctOfSystem.value * 100,
    coolingPerMwh: TCO_DEFAULTS.generic.coolingSystemCostPerMwhUsd.value,
    chargingPerMwh: TCO_DEFAULTS.generic.chargingSystemCostPerMwhUsd.value,
    maintenancePctPerYear: TCO_DEFAULTS.generic.maintenanceCostPctOfSystemPerYear.value * 100,
    sparePctPerYear: TCO_DEFAULTS.generic.spareCostPctOfSystemPerYear.value * 100,
    serviceContractPctPerYear: TCO_DEFAULTS.generic.serviceContractCostPctOfSystemPerYear.value * 100,
    trainingCost: TCO_DEFAULTS.generic.trainingCostUsd.value,
    vesselLifeYears,
    operatingHoursPerYear,
    cyclesPerYear,
    financingRatePct: TCO_DEFAULTS.generic.financingRatePct.value,
    recyclingPerMwh: TCO_DEFAULTS.generic.recyclingCostPerMwhUsd.value,
    residualValuePct: TCO_DEFAULTS.generic.residualValuePctOfSystem.value,
    downtimeDaysPerYear,
    downtimeCostPerDay: 3500,
  };

  const memoKey = [supplier, mwh, vesselLifeYears, operatingHoursPerYear, cyclesPerYear, downtimeDaysPerYear];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const result = useMemo(() => computeTco(inputs), memoKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bestCase = useMemo(() => computeTco({ ...inputs, downtimeDaysPerYear: Math.max(0, downtimeDaysPerYear - 1), maintenancePctPerYear: inputs.maintenancePctPerYear * 0.7 }), memoKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const worstCase = useMemo(() => computeTco({ ...inputs, downtimeDaysPerYear: downtimeDaysPerYear + 3, maintenancePctPerYear: inputs.maintenancePctPerYear * 1.6 }), memoKey);

  return (
    <div>
      <PageHeader
        eyebrow="Page 24"
        title="Total-Cost-of-Ownership Calculator"
        description="Compares Corvus systems with a competitor pricing range over the expected vessel life. Every assumption is shown and editable."
      />

      <Card className="mb-6 border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-500/10">
        <p className="text-xs text-amber-700 dark:text-amber-400">{TCO_DISCLAIMER}</p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Card>
          <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Inputs</div>
          <div className="space-y-4">
            <label className="block text-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">Supplier</span>
              <div className="mt-1 flex gap-2">
                <button onClick={() => setSupplier("corvus")} className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-medium ${supplier === "corvus" ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>Corvus</button>
                <button onClick={() => setSupplier("competitor")} className={`flex-1 rounded-lg px-3 py-1.5 text-xs font-medium ${supplier === "competitor" ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>Competitor (range)</button>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{supplier === "corvus" ? TCO_DEFAULTS.corvus.systemCostBasis : TCO_DEFAULTS.competitorRange.rangeBasis}</p>
            </label>
            <NumberField label="System size" value={mwh} onChange={setMwh} suffix="MWh" step={0.5} />
            <NumberField label="Vessel life" value={vesselLifeYears} onChange={setVesselLifeYears} suffix="years" />
            <NumberField label="Operating hours / year" value={operatingHoursPerYear} onChange={setOperatingHoursPerYear} suffix="hrs" step={100} />
            <NumberField label="Cycles / year" value={cyclesPerYear} onChange={setCyclesPerYear} suffix="cycles" step={10} />
            <NumberField label="Expected downtime / year" value={downtimeDaysPerYear} onChange={setDowntimeDaysPerYear} suffix="days" />
          </div>
        </Card>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard label="Total lifecycle cost" value={formatUsd(result.totalLifecycleCost)} tone="sky" />
            <StatCard label="Cost / operating hour" value={result.costPerHour ? formatUsd(result.costPerHour, { compact: false }) : "—"} />
            <StatCard label="Cost / cycle" value={result.costPerCycle ? formatUsd(result.costPerCycle, { compact: false }) : "—"} />
            <StatCard label="Cost / delivered MWh" value={result.costPerDeliveredMwh ? formatUsd(result.costPerDeliveredMwh, { compact: false }) : "—"} />
          </div>

          <Section title="Cost breakdown" className="mt-6">
            <Card>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <Row label="Base system cost" value={result.baseSystemCost} />
                  <Row label="Installation" value={result.installationCost} />
                  <Row label="Engineering" value={result.engineeringCost} />
                  <Row label="Integration" value={result.integrationCost} />
                  <Row label="Cooling system" value={result.coolingCost} />
                  <Row label="Charging system" value={result.chargingCost} />
                  <Row label="Initial CAPEX (total)" value={result.initialCapex} bold />
                  <Row label="Annual OPEX (maintenance + spares + service + downtime)" value={result.annualOpex} />
                  <Row label={`Annual OPEX × ${vesselLifeYears} years`} value={result.annualOpex * vesselLifeYears} />
                  <Row label="Recycling cost (end of life)" value={result.recyclingCost} />
                  <Row label="Residual value (credit)" value={-result.residualValue} />
                  <Row label="Total lifecycle cost" value={result.totalLifecycleCost} bold />
                  <Row label="NPV (financing rate applied)" value={result.npv} bold />
                </tbody>
              </table>
            </Card>
          </Section>

          <Section title="Sensitivity analysis — best / expected / worst case">
            <div className="grid gap-4 sm:grid-cols-3">
              <ScenarioCard label="Best case" tone="emerald" value={bestCase.totalLifecycleCost} note="Lower downtime, 30% lower maintenance" />
              <ScenarioCard label="Expected case" tone="sky" value={result.totalLifecycleCost} note="As configured" />
              <ScenarioCard label="Worst case" tone="rose" value={worstCase.totalLifecycleCost} note="+3 downtime days/yr, 60% higher maintenance" />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <tr>
      <td className={`py-2 text-slate-600 dark:text-slate-400 ${bold ? "font-semibold text-slate-900 dark:text-slate-100" : ""}`}>{label}</td>
      <td className={`py-2 text-right ${bold ? "font-semibold text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400"}`}>{formatUsd(value, { compact: false })}</td>
    </tr>
  );
}

function ScenarioCard({ label, tone, value, note }) {
  return (
    <Card>
      <Badge tone={tone}>{label}</Badge>
      <div className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{formatUsd(value)}</div>
      <div className="mt-1 text-xs text-slate-400">{note}</div>
    </Card>
  );
}

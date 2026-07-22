// Total-Cost-of-Ownership calculation engine. Pure functions over an inputs
// object so the TCO page can stay a thin UI layer. All formulas are
// standard capital-planning math (NPV, payback) — the *inputs* are what
// carry provenance (see data/tco.js).
export function computeTco(inputs) {
  const {
    mwh,
    systemCostPerMwh,
    installationPct,
    engineeringPct,
    integrationPct,
    coolingPerMwh,
    chargingPerMwh,
    maintenancePctPerYear,
    sparePctPerYear,
    serviceContractPctPerYear,
    trainingCost,
    vesselLifeYears,
    operatingHoursPerYear,
    cyclesPerYear,
    financingRatePct,
    recyclingPerMwh,
    residualValuePct,
    downtimeDaysPerYear,
    downtimeCostPerDay,
  } = inputs;

  const baseSystemCost = mwh * systemCostPerMwh;
  const installationCost = baseSystemCost * (installationPct / 100);
  const engineeringCost = baseSystemCost * (engineeringPct / 100);
  const integrationCost = baseSystemCost * (integrationPct / 100);
  const coolingCost = mwh * coolingPerMwh;
  const chargingCost = mwh * chargingPerMwh;

  const initialCapex = baseSystemCost + installationCost + engineeringCost + integrationCost + coolingCost + chargingCost + trainingCost;

  const annualMaintenance = baseSystemCost * (maintenancePctPerYear / 100);
  const annualSpares = baseSystemCost * (sparePctPerYear / 100);
  const annualService = baseSystemCost * (serviceContractPctPerYear / 100);
  const annualDowntimeCost = downtimeDaysPerYear * downtimeCostPerDay;
  const annualOpex = annualMaintenance + annualSpares + annualService + annualDowntimeCost;

  const recyclingCost = mwh * recyclingPerMwh;
  const residualValue = baseSystemCost * (residualValuePct / 100);

  const totalLifecycleCost = initialCapex + annualOpex * vesselLifeYears + recyclingCost - residualValue;

  const totalOperatingHours = operatingHoursPerYear * vesselLifeYears;
  const totalCycles = cyclesPerYear * vesselLifeYears;

  const costPerHour = totalOperatingHours > 0 ? totalLifecycleCost / totalOperatingHours : null;
  const costPerCycle = totalCycles > 0 ? totalLifecycleCost / totalCycles : null;
  const costPerDeliveredMwh = mwh > 0 ? totalLifecycleCost / mwh : null;

  // NPV of the annual opex stream (capex treated as year-0 outflow).
  const r = financingRatePct / 100;
  let npv = -initialCapex;
  for (let y = 1; y <= vesselLifeYears; y++) {
    npv -= annualOpex / Math.pow(1 + r, y);
  }
  npv += residualValue / Math.pow(1 + r, vesselLifeYears);
  npv -= recyclingCost / Math.pow(1 + r, vesselLifeYears);

  return {
    initialCapex,
    baseSystemCost,
    installationCost,
    engineeringCost,
    integrationCost,
    coolingCost,
    chargingCost,
    annualOpex,
    annualMaintenance,
    annualSpares,
    annualService,
    annualDowntimeCost,
    recyclingCost,
    residualValue,
    totalLifecycleCost,
    costPerHour,
    costPerCycle,
    costPerDeliveredMwh,
    npv,
  };
}


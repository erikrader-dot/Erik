import { ASSUMPTIONS } from "./assumptions";

// Total-Cost-of-Ownership default assumptions. Every value is either
// derived from a disclosed real figure (sourceIds set) or a labeled generic
// industry planning assumption (isGenericAssumption: true, no sourceIds).
// No competitor pricing is stated as a point figure anywhere here — only
// ranges, per the platform's design rule ("do not use unsupported
// competitor pricing").
export const TCO_DEFAULTS = {
  corvus: {
    label: "Corvus (Blue Whale NxtGen / Dolphin NxtGen)",
    systemCostPerMwhUsd: ASSUMPTIONS.blendedAspPerMwhUsd.value,
    systemCostBasis: ASSUMPTIONS.blendedAspPerMwhUsd.method,
    cycleLife: null,
    cycleLifeNote: "Not disclosed in Corvus's 2026 deck for any specific product — no per-model cycle-life figure is stated. Leave blank or enter a customer-specific number from Corvus engineering.",
    coolingType: "Liquid (Blue Whale NxtGen) or Air/Liquid variants (Dolphin NxtGen)",
    ipRating: "IP66",
    warrantyYears: null,
    warrantyNote: "Not disclosed in source — no warranty length or terms are stated anywhere in Corvus's 2026 deck.",
    sourceIds: ["corvus_presentation_2026"],
  },
  competitorRange: {
    label: "Competitor range (unnamed — do not attribute to one named company without confirmed pricing)",
    systemCostPerMwhLowUsd: 400000,
    systemCostPerMwhHighUsd: 650000,
    rangeBasis: "ESTIMATE — no competitor in the reviewed source documents discloses per-MWh pricing. This range is a generic planning band (±25%/+22% around the Corvus-implied blended ASP) for sensitivity analysis only, not a sourced competitor price.",
    isEstimate: true,
    knownRealSpec: {
      companyId: "ayk",
      note: "AYK's own deck discloses real module-level cycle life: 4,000 cycles (steel Aries/Pisces modules) to 6,000 cycles (aluminum OrionAN/AriesA modules) — usable as a real competitor cycle-life input even though price is not disclosed.",
      cycleLifeSteel: 4000,
      cycleLifeAluminum: 6000,
      sourceIds: ["ayk_intro_eac"],
    },
  },
  generic: {
    installationCostPctOfSystem: { value: 0.08, isGenericAssumption: true },
    engineeringCostPctOfSystem: { value: 0.05, isGenericAssumption: true },
    integrationCostPctOfSystem: { value: 0.06, isGenericAssumption: true },
    coolingSystemCostPerMwhUsd: { value: 18000, isGenericAssumption: true },
    chargingSystemCostPerMwhUsd: { value: 22000, isGenericAssumption: true },
    depthOfDischargePct: { value: 85, isGenericAssumption: true },
    annualDegradationPct: { value: 2.5, isGenericAssumption: true },
    maintenanceCostPctOfSystemPerYear: { value: 0.02, isGenericAssumption: true },
    spareCostPctOfSystemPerYear: { value: 0.01, isGenericAssumption: true },
    serviceContractCostPctOfSystemPerYear: { value: 0.015, isGenericAssumption: true },
    trainingCostUsd: { value: 15000, isGenericAssumption: true },
    expectedDowntimeDaysPerYear: { value: 2, isGenericAssumption: true },
    insurancePremiumDeltaPct: { value: -0.5, isGenericAssumption: true, note: "Illustrative — assumes a modest insurance-premium reduction vs. a diesel baseline; not from any source document." },
    financingRatePct: { value: 6, isGenericAssumption: true },
    recyclingCostPerMwhUsd: { value: 12000, isGenericAssumption: true, note: "Corvus's deck lists \"Recycling services\" as an offering but discloses no cost figure." },
    residualValuePctOfSystem: { value: 5, isGenericAssumption: true },
    vesselLifeYears: { value: 25, isGenericAssumption: true },
    dieselFuelCostPerHourUsd: { value: 180, isGenericAssumption: true },
    emissionsValuePerTonneCo2Usd: { value: 90, isGenericAssumption: true },
  },
};

export const TCO_DISCLAIMER =
  "All competitor pricing and every generic assumption on this page is explicitly labeled and editable. Nothing here should be quoted to a customer as a confirmed competitor price — none of the five source documents disclose competitor pricing.";

// Battery product / system lines, for Corvus and named competitors.
export const PRODUCTS = [
  {
    id: "corvus-orca",
    companyId: "corvus",
    name: "Orca Energy",
    chemistry: "NMC",
    launched: 2016,
    referenceSize: "10 MWh (reference footprint 6290x14712x3115mm, 130 tons)",
    notes: "Original flagship Corvus product line. DNV Type Approval for Control and Monitoring System (\"Orca Energy Storage System\").",
    sourceIds: ["corvus_presentation_2026", "mbf_tech_2026q3"],
  },
  {
    id: "corvus-blue-whale",
    companyId: "corvus",
    name: "Blue Whale NxtGen",
    chemistry: "LFP",
    launched: 2019,
    referenceSize: "20 MWh (reference footprint, 185 tons)",
    specs: {
      moduleEnergy: "24.12 kWh / 87.6 VDC",
      moduleWeight: "185 kg",
      capacity: "314 Ah",
      cRateContinuous: "0.4C",
      cRateFullCycle: "0.7C",
      cRatePeak: "1C for 25 min",
      ip: "IP66",
      cooling: "Liquid",
      maxVoltage: "1200 VDC",
    },
    tagline: "\"Low Cost LFP Solution\" — designed for retrofits and newbuilds with high energy demand and low CAPEX.",
    applications: ["Ferries", "Cruise", "Tugs", "Offshore", "Offshore Wind", "Short Sea"],
    sourceIds: ["corvus_presentation_2026", "mbf_tech_2026q3"],
  },
  {
    id: "corvus-dolphin-nxtgen",
    companyId: "corvus",
    name: "Dolphin NxtGen (Air Cooled / Energy LQ / Power LQ)",
    chemistry: "NCA",
    launched: 2024,
    referenceSize: "31 MWh (reference footprint, 182 tons)",
    notes: "Three variants: Air Cooled, Energy LQ (liquid-cooled, energy-optimized), Power LQ (liquid-cooled, power-optimized). Used on Washington State Ferries (13.2 MWh/vessel) and planned for BC Ferries New Major Vessels future all-electric phase (up to 70 MWh/vessel).",
    sourceIds: ["corvus_presentation_2026", "mbf_tech_2026q3"],
  },
  {
    id: "corvus-moray",
    companyId: "corvus",
    name: "Moray",
    chemistry: "NMC",
    notes: "DNV type-approved product (certificate TAE00004VJ, Norway).",
    sourceIds: ["mbf_tech_2026q3"],
  },
  {
    id: "corvus-blue-marlin",
    companyId: "corvus",
    name: "Blue Marlin",
    chemistry: "Lithium-ion capacitor",
    notes: "DNV type-approved product (certificate TAE00004G7, Canada) — Corvus's only non-battery-chemistry (capacitor) type-approved product.",
    sourceIds: ["mbf_tech_2026q3"],
  },
  {
    id: "ayk-mbc",
    companyId: "ayk",
    name: "Marine Battery Container (MBC)",
    chemistry: "LFP",
    notes: "Containerized system, up to 2,815.2 kWh per 20' container as configured (5.6 MWh/container max density claim), stackable to 10 containers (28.15 MWh per footprint). Steel module lines: Aries/Aries+/Pisces/Pisces+ (4,000-cycle life). Aluminum module lines: OrionAN family, AriesA/AriesA+, PiscesA+ (4,000-6,000 cycle life). Marketed for fast retrofit (\"installed and commissioned in a few days instead of months\").",
    applications: ["Retrofit newbuild", "Shore power / cold ironing", "Battery swapping"],
    sourceIds: ["ayk_intro_eac"],
  },
  {
    id: "ayk-rack",
    companyId: "ayk",
    name: "Liquid-Cooled Rack System (Perseus / Polaris)",
    chemistry: "LFP",
    notes: "Perseus = power-optimized module (5C peak, 170 Wh/L). Polaris = energy-optimized module (2C peak, 246 Wh/L). 1500 VDC upgrade path available.",
    sourceIds: ["ayk_intro_eac"],
  },
];

export function productsForCompany(companyId) {
  return PRODUCTS.filter((p) => p.companyId === companyId);
}
export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

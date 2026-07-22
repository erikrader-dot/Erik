// Platform-wide planning assumptions used to turn raw facts into estimates
// (replacement years, revenue opportunity, TCO inputs). Every assumption
// here is either (a) derived arithmetically from a disclosed real figure —
// in which case sourceIds is set — or (b) a generic industry planning
// assumption with NO source document backing it, in which case sourceIds is
// empty and isGenericAssumption is true. Nothing in this file should be
// treated as vessel-specific fact; it exists to make inferences auditable
// and swappable once Corvus supplies real engineering/finance figures.
export const ASSUMPTIONS = {
  blendedAspPerMwhUsd: {
    value: 533000,
    label: "Implied blended average selling price per MWh",
    method: "Corvus FY2025 disclosed revenue (>$160M) ÷ FY2025 MWh delivered (300 MWh) = ~$533k/MWh. Blended across all products, services, and project types — not a per-unit list price.",
    sourceIds: ["corvus_presentation_2026"],
    isGenericAssumption: false,
  },
  typicalCalendarLifeYears: {
    value: 12,
    range: [10, 15],
    label: "Typical marine Li-ion ESS calendar life before major capacity fade / replacement planning window opens",
    method: "Generic industry planning assumption. No source document in this build states a Corvus-specific or vessel-specific expected life figure.",
    sourceIds: [],
    isGenericAssumption: true,
  },
  engagementLeadTimeYears: {
    value: 2,
    label: "Recommended customer engagement lead time before estimated replacement year",
    method: "Generic sales-planning assumption (typical capital-project procurement lead time for marine ESS replacement). Not stated in any source document.",
    sourceIds: [],
    isGenericAssumption: true,
  },
  competitiveFieldForReplacement: {
    value: ["AYK Energy", "Echandia", "CATL", "Leclanché", "EST-Floattech"],
    label: "Plausible competing suppliers for a marine ESS replacement bid",
    method: "Generic inference from the MBF type-approval leaderboard (see certifications.js) — the named companies hold the next-largest active type-approval counts after Corvus. Not a vessel-specific or deal-specific fact.",
    sourceIds: ["mbf_tech_2026q3"],
    isGenericAssumption: true,
  },
};

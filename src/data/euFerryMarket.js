// EU battery-ferry market aggregate statistics — Maritime Battery Forum,
// "Overview of the battery powered ferry market in the European Union"
// (20 Dec 2024). This source names NO companies, vessels, or suppliers —
// it is pure aggregate market data, used here for market-sizing context on
// the Overview and Fleet Expansion pages. Only two figures are printed
// exactly (176 total ferries; the builder-country table); everything else
// is pixel-measured from unlabeled charts and is explicitly an estimate.
export const EU_FERRY_MARKET = {
  asOfDate: "2024-12-20",
  totalFerriesExact: 176,
  cumulativeCapacityMwh2024: 154.8,
  cumulativeCapacityMwh2027Pipeline: 191.2,
  newCapacityInstalled2024Mwh: 60,
  pipelineCaveat:
    "MBF explicitly states 2025-2027 figures are known/contracted pipeline captured as of 20 Dec 2024, NOT a forecast, and are an undercount since not all future projects are registered yet.",
  vesselTypeMixByCount2024: { pureElectric: 0.48, hybrid: 0.40, plugInHybrid: 0.10, unknown: 0.03 },
  vesselTypeMixByCapacity2024: { hybrid: 0.49, pureElectric: 0.28, plugInHybrid: 0.22, unknown: 0.01 },
  newbuildVsRetrofit: { newbuild: 0.79, retrofit: 0.19, unknown: 0.02 },
  operatingEnvironment2024: { inland: 0.52, coastal: 0.38, unverified: 0.10 },
  chemistryMix2024: { NMC: 0.58, LFP: 0.21, LTO: 0.09, NiCd: 0.04, LeadAcid: 0.03, NCA: 0.01, Unknown: 0.05 },
  builderCountryTop: [
    { country: "Netherlands", ships: 37 },
    { country: "Unknown", ships: 27 },
    { country: "China", ships: 17 },
    { country: "Spain", ships: 15 },
    { country: "France", ships: 14 },
    { country: "Germany", ships: 12 },
    { country: "Poland", ships: 10 },
    { country: "Denmark", ships: 7 },
    { country: "Estonia", ships: 7 },
  ],
  operatingCountryTop: [
    { country: "France", ships: 31, note: "Dominated pre-2013, growth has since stalled" },
    { country: "Germany", ships: 26 },
    { country: "Netherlands", ships: 21 },
    { country: "Sweden", ships: 19 },
    { country: "Denmark", ships: 18 },
  ],
  narrative:
    "Cumulative installed capacity roughly doubled in a single year (95.2 MWh in 2023 to 154.8 MWh in 2024) — the fastest year of growth in the register's history. NMC has been the dominant chemistry in the EU ferry fleet since ~2016, having displaced LFP (2012-15) and early Ni-Cd/lead-acid installs (pre-2011).",
  gaps: "This source names zero operators, vessels, shipyards, or battery suppliers — it cannot be used to identify specific EU accounts. Use it only for market-sizing / TAM context alongside the named-entity data in vessels.js and companies.js.",
  sourceIds: ["mbf_eu_ferry_2024"],
};

import { ASSUMPTIONS } from "./assumptions";

// Portfolio-level 10-year replacement-opportunity forecast (2027-2036).
//
// METHOD (fully disclosed — this is a MODEL OUTPUT, not vessel-by-vessel
// fact): Corvus's own deck discloses two real anchors — cumulative MWh sold
// (~1,450 MWh through 2026) and FY2025 deliveries (300 MWh). No source
// document gives a year-by-year delivery history, so one is reconstructed
// here as an illustrative growth curve (small early deliveries starting
// with the real, dated MF Ampere install in 2015, ramping toward the real
// 300 MWh FY2025 figure). That reconstructed curve is then shifted forward
// by the generic 12-year replacement-cycle assumption (see assumptions.js)
// to produce the forecast below. Two real, disclosed numbers anchor the
// model (2015 MF Ampere delivery, FY2025 300 MWh); everything else is a
// labeled estimate.
//
// WHAT WOULD REPLACE THIS MODEL: a real year-by-year, vessel-by-vessel
// delivered-MWh ledger from Corvus's own order/delivery system, joined to
// actual install dates, chemistries, and (ideally) telemetry-based
// state-of-health data from the existing Vessel Information Portal —
// see the "Data Requirements" section on the Replacement Scanner page.
export const RECONSTRUCTED_DELIVERY_CURVE = [
  { year: 2015, mwh: 1, note: "Real anchor: MF Ampere, Corvus's first delivery per its own deck." },
  { year: 2016, mwh: 5, note: "Modeled" },
  { year: 2017, mwh: 10, note: "Modeled" },
  { year: 2018, mwh: 20, note: "Modeled" },
  { year: 2019, mwh: 35, note: "Modeled" },
  { year: 2020, mwh: 55, note: "Modeled" },
  { year: 2021, mwh: 80, note: "Modeled" },
  { year: 2022, mwh: 120, note: "Modeled" },
  { year: 2023, mwh: 165, note: "Modeled" },
  { year: 2024, mwh: 220, note: "Modeled" },
  { year: 2025, mwh: 300, note: "Real anchor: FY2025 disclosed deliveries per Corvus's own deck." },
  { year: 2026, mwh: 160, note: "Modeled (partial year, report dated mid-2026)" },
];

export const REPLACEMENT_FORECAST = RECONSTRUCTED_DELIVERY_CURVE.filter(
  (row) => row.year + ASSUMPTIONS.typicalCalendarLifeYears.value <= 2036
).map((row) => {
  const replacementYear = row.year + ASSUMPTIONS.typicalCalendarLifeYears.value;
  const estimatedMwh = row.mwh;
  return {
    year: replacementYear,
    originalDeliveryYear: row.year,
    estimatedReplacementEligibleMwh: estimatedMwh,
    estimatedRevenueOpportunityUsd: estimatedMwh * ASSUMPTIONS.blendedAspPerMwhUsd.value,
    basis: row.note,
  };
});

export const FORECAST_TOTAL_MWH = REPLACEMENT_FORECAST.reduce((s, r) => s + r.estimatedReplacementEligibleMwh, 0);
export const FORECAST_TOTAL_REVENUE_USD = REPLACEMENT_FORECAST.reduce((s, r) => s + r.estimatedRevenueOpportunityUsd, 0);

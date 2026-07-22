// Type-approval / certification records from the MBF Q3'26 Technology
// Report (225 active approvals across 9 class societies). Two subsets are
// modeled: Corvus's own 20 approvals (own-company records), and the small
// set of competitor certificates the source document names explicitly as
// "expiring within 6 months" (a renewal-outreach signal list — the source
// states 16 total expiring but only names 6; the rest are not fabricated).
export const CORVUS_TYPE_APPROVALS = [
  { society: "ABS", product: "Orca Energy", country: "Norway", chemistry: "NMC", approved: "2023-03-28", expires: "2028-03-28", certificate: "23-00T2340728-2-PDA-DUP" },
  { society: "ABS", product: "Blue Whale", country: "Canada", chemistry: "LFP", approved: "2024-08-12", expires: "2029-08-12", certificate: "24-00T2535549-1-PDA" },
  { society: "BV", product: "Dolphin NxtGen Energy", country: "Canada", chemistry: "NCA", approved: "2025-05-29", expires: "2029-07-23", certificate: "77331/A1 BV" },
  { society: "BV", product: "Orca Energy", country: "Canada", chemistry: "NMC", approved: "2025-05-29", expires: "2028-01-20", certificate: "68632/A1 BV" },
  { society: "BV", product: "Blue Whale", country: "Canada", chemistry: "LFP", approved: "2025-07-31", expires: "2030-01-10", certificate: "63278/A1 BV" },
  { society: "BV", product: "Orca Energy", country: "Canada", chemistry: "NMC", approved: "2025-05-28", expires: "2028-11-15", certificate: "52350/B1 BV" },
  { society: "ClassNK", product: "Orca Energy", country: "Norway", chemistry: "NMC", approved: "2026-06-09", expires: "2031-06-09", certificate: "26CY045" },
  { society: "ClassNK", product: "Orca Energy", country: "Canada", chemistry: "NMC", approved: "2024-03-13", expires: "2029-03-13", certificate: "24LB001" },
  { society: "DNV", product: "Dolphin NxtGen Energy", country: "Norway", chemistry: "NCA", approved: "2023-12-11", expires: "2028-12-11", certificate: "TAE00004UB" },
  { society: "DNV", product: "Dolphin NxtGen Power", country: "Norway", chemistry: "NCA", approved: "2024-12-05", expires: "2029-12-05", certificate: "TAE00004Z6" },
  { society: "DNV", product: "Blue Whale", country: "Canada", chemistry: "LFP", approved: "2024-04-24", expires: "2029-04-24", certificate: "TAE00004VC" },
  { society: "DNV", product: "Moray", country: "Norway", chemistry: "NMC", approved: "2024-02-06", expires: "2029-02-06", certificate: "TAE00004VJ" },
  { society: "DNV", product: "Orca Energy", country: "Norway", chemistry: "NMC", approved: "2022-08-12", expires: "2027-08-12", certificate: "TAE000026N" },
  { society: "DNV", product: "Blue Marlin", country: "Canada", chemistry: "Lithium-ion capacitor", approved: "2022-08-31", expires: "2027-08-31", certificate: "TAE00004G7" },
  { society: "DNV", product: "Dolphin Energy and Power v.1.3", country: "Norway", chemistry: "NMC", approved: "2023-09-17", expires: "2028-09-17", certificate: "TAE00004B4" },
  { society: "KR", product: "Orca Energy", country: "Canada", chemistry: "NMC", approved: "2022-07-24", expires: "2027-07-24", certificate: "VAN41546-AC001" },
  { society: "LR", product: "Dolphin NxtGen Energy", country: "Norway", chemistry: "NMC", approved: "2025-02-24", expires: "2030-02-24", certificate: "—" },
  { society: "RINA", product: "Orca Energy", country: "Canada", chemistry: "NMC", approved: "2025-09-16", expires: "2030-09-16", certificate: "ELE201725CS/001" },
  { society: "RINA", product: "Dolphin NextGen Energy", country: "Canada", chemistry: "NCA", approved: "2024-02-08", expires: "2029-02-08", certificate: "ELE163023XP" },
  { society: "RINA", product: "Blue Whale", country: "Canada", chemistry: "LFP", approved: "2024-07-09", expires: "2029-07-09", certificate: "ELE009521YC" },
];

// Named entries from the MBF "certificates expiring within 6 months" list
// (source states 16 total; only these were legibly named in the extraction —
// treated as a partial, real sample rather than fabricating the rest).
export const EXPIRING_COMPETITOR_CERTIFICATES = [
  { company: "Siemens Energy", product: "BlueVault", expires: "2026-08-05", daysLeft: 22 },
  { company: "Leclanché", product: "M2", expires: "2026-09-30", daysLeft: 78 },
  { company: "Saft Ferak A.S.", product: "(unspecified)", expires: "2026-09-30", daysLeft: 78 },
  { company: "BorgWarner Akasol GmbH", product: "AKASOL Battery Systems", expires: "2026-11-30", daysLeft: 140 },
  { company: "Samsung Heavy Industries", product: "SSB1160A", expires: "2026-12-01", daysLeft: 141 },
  { company: "Hanwha Engine / Hanwha Aerospace", product: "HMCB-A-B", expires: "2026-12-23", daysLeft: 163 },
];

export const MBF_MARKET_STATS = {
  asOfDate: "2026-07-13",
  totalActiveApprovals: 225,
  uniqueProducts: 156,
  manufacturerCountries: 24,
  chemistries: 10,
  manufacturerCompanies: 118,
  newApprovalsLast3Months: 26,
  approvalsExpiringWithin6Months: 16,
  shipRegister: {
    totalShips: 1932,
    totalCapacityMwh: 2099,
    avgCapacityKwh: 1086,
    operationalShips: 1406,
    europeNorwayShareOfFleet: 0.65,
  },
  chemistryShareOfNewApprovals: { LFP: 0.61, NMC: 0.28, LTO: 0.06, Other: 0.05 },
  topManufacturersByApprovals: [
    { companyId: "corvus", approvals: 20 },
    { name: "CATL", approvals: 7 },
    { name: "CALB", approvals: 7 },
    { companyId: "echandia", approvals: 7 },
    { name: "EST-Floattech", approvals: 7 },
    { name: "Lehmann Marine", approvals: 7 },
    { companyId: "leclanche", approvals: 6 },
    { name: "Shenzhen Racern Technology", approvals: 6 },
    { name: "Shift Clean Solutions", approvals: 6 },
    { name: "EVE Power", approvals: 5 },
    { name: "Hanwha Aerospace", approvals: 5 },
    { companyId: "ayk", approvals: 5 },
  ],
  sourceIds: ["mbf_tech_2026q3"],
};

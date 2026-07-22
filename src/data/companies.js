// Company / organization master record. type drives which pages surface a
// given company. Facts are cited via sourceIds -> data/sources.js; entries
// with no sourceIds are illustrative examples (see lib/schema.js).
export const COMPANY_TYPES = {
  OEM_SELF: "Corvus (self)",
  OEM_COMPETITOR: "Battery OEM — Competitor",
  INTEGRATOR: "Integrator",
  SHIPYARD: "Shipyard",
  DESIGNER: "Naval Architect / Designer",
  OPERATOR: "Vessel Operator",
  CLASS_SOCIETY: "Classification Society",
  GOVERNMENT: "Government / Regulatory",
  INVESTOR: "Investor / Owner",
};

export const COMPANIES = [
  {
    id: "corvus",
    name: "Corvus Energy",
    type: COMPANY_TYPES.OEM_SELF,
    country: "Norway",
    hq: "Bergen, Norway (+ Richmond, Canada; USA)",
    foundedYear: 2009,
    chemistries: ["NMC", "LFP", "NCA"],
    marketPosition:
      "#1 by installed base and by type-approval count (20 of 225 active MBF-tracked approvals, ~9% share, largest single manufacturer). >50% self-reported global market share, >75 customers including \"all largest integrators and yards in the world.\"",
    stats: {
      projects: 1350,
      mwhSold: 1450,
      operatingHours: 14000000,
      employees: 368,
      factories: ["Norway", "Canada", "USA"],
      revenueUSD: 160000000,
      customers: 75,
    },
    notes: "Founded 2009. FY2025: 41,000 modules, 300 MWh delivered, >$160M revenue, positive EBITDA, $60M growth capital raised. Owners include BW, Woven Capital, Equinor, Shell, Morgan Stanley, Just Climate, J. Lauritzen.",
    sourceIds: ["corvus_presentation_2026", "mbf_tech_2026q3"],
  },
  {
    id: "echandia",
    name: "Echandia",
    type: COMPANY_TYPES.OEM_COMPETITOR,
    country: "Sweden",
    hq: "Sweden (Echandia Marine North America subsidiary presenting)",
    chemistries: ["LTO", "NMC"],
    marketPosition: "7 of 225 MBF-tracked type approvals (tied for 2nd tier with CATL, CALB, EST-Floattech, Lehmann Marine).",
    notes:
      "2026 marketing centers on thermal-runaway safety and fire suppression (FIFI4 Strike Foam, dual gas/firewire detection) rather than product specs — no product line name, cycle life, or pricing disclosed in the reviewed deck. CEO of the North America subsidiary is Trevor Small. Case studies: MS Brim (Mar 2021 water-mist fire incident, used as a cautionary example) and E-Ferry Ellen (2023 foam-suppression success story).",
    sourceIds: ["echandia_2026", "mbf_tech_2026q3"],
  },
  {
    id: "ayk",
    name: "AYK Energy",
    type: COMPANY_TYPES.OEM_COMPETITOR,
    country: "Andorra (production in Zhuhai, China)",
    hq: "Andorra la Vella, Andorra (legal); Shenzhen, China (admin); Zhuhai, China (production/R&D)",
    foundedYear: 2018,
    chemistries: ["LFP"],
    marketPosition: "5 of 225 MBF-tracked type approvals. Self-positions as the \"3rd generation\" successor to Corvus (1st gen) and PBES (2nd gen) via founder pedigree.",
    stats: {
      manufacturingCapacityMwhYear: 300,
      employees: 150,
      deliveredMwh: { 2022: 10, 2023: 20, 2024: 50 },
      expectedOrderMwh2025_2026: 300,
    },
    notes:
      "Founder & President Chris Kruger was CTO of Corvus (2014) and Founder/CTO of PBES (2018) before founding AYK — a direct competitive-intelligence flag: AYK's leadership has first-hand knowledge of Corvus's early architecture. Named \"Global strategic partner of Wärtsilä\" (2022). Certified by DNV, LR, BV, ABS, RINA, CRS, ES TRIN. Products: Marine Battery Container (MBC, steel Aries/Pisces + aluminum OrionAN/AriesA/PiscesA module families) and liquid-cooled rack modules (Perseus/Polaris). Pursuing port/shore electrification and battery-swapping infrastructure, plus Asia-Pacific expansion (2025-26).",
    sourceIds: ["ayk_intro_eac", "mbf_tech_2026q3"],
  },
  { id: "catl", name: "CATL", type: COMPANY_TYPES.OEM_COMPETITOR, country: "China", marketPosition: "7 of 225 MBF-tracked type approvals (2nd tier, tied).", sourceIds: ["mbf_tech_2026q3"] },
  { id: "calb", name: "CALB", type: COMPANY_TYPES.OEM_COMPETITOR, country: "China", marketPosition: "7 of 225 MBF-tracked type approvals (2nd tier, tied).", sourceIds: ["mbf_tech_2026q3"] },
  { id: "est-floattech", name: "EST-Floattech", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Netherlands", chemistries: ["NMC"], marketPosition: "7 of 225 MBF-tracked type approvals (2nd tier, tied).", sourceIds: ["mbf_tech_2026q3"] },
  { id: "lehmann-marine", name: "Lehmann Marine", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Germany", chemistries: ["LFP"], marketPosition: "7 of 225 MBF-tracked type approvals (2nd tier, tied).", sourceIds: ["mbf_tech_2026q3"] },
  { id: "leclanche", name: "Leclanché", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Switzerland", chemistries: ["NMC"], marketPosition: "6 of 225 MBF-tracked type approvals. Product \"M2\" certificate expiring 30 Sep 2026 per MBF renewal-tracking list.", sourceIds: ["mbf_tech_2026q3"] },
  { id: "kongsberg", name: "Kongsberg Maritime", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Norway", chemistries: ["NMC"], marketPosition: "Small MBF type-approval count (2-3, below top-15). Also named as an AYK \"World-Class Partnership\" logo — relationship nature (battery vs. broader systems) not specified in source.", sourceIds: ["mbf_tech_2026q3", "ayk_intro_eac"] },
  { id: "toshiba", name: "Toshiba (SCiB)", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Japan", chemistries: ["LTO"], marketPosition: "Appears in CCS/ClassNK type-approval lists (LTO, SCiB product). Also shown as an illustrative cell image (not a confirmed supply relationship) in Echandia's own deck.", sourceIds: ["mbf_tech_2026q3", "echandia_2026"] },
  { id: "pbes", name: "PBES (Plan B Energy Storage)", type: COMPANY_TYPES.OEM_COMPETITOR, country: "Canada", marketPosition: "Not in MBF's active type-approval top list. Historical relevance: AYK's founder was Founder/CTO of PBES (2018) before founding AYK.", notes: "Referenced only via AYK's founder-history slide, describing PBES as the \"2nd generation\" marine battery company.", sourceIds: ["ayk_intro_eac"] },
  { id: "byd", name: "BYD", type: COMPANY_TYPES.OEM_COMPETITOR, country: "China", marketPosition: "Not in MBF type-approval list. Named as a co-development partner with Corvus (not a pure competitor) per press coverage shown in Corvus's own deck.", notes: "\"Chinese BYD to co-develop marine batteries with Corvus\" — EnergyWatch headline reproduced in Corvus's 2026 deck.", sourceIds: ["corvus_presentation_2026"] },

  // Integrators
  { id: "abb", name: "ABB", type: COMPANY_TYPES.INTEGRATOR, country: "Switzerland/Global", notes: "Integrator on BC Ferries New Major Vessels and Washington State Ferries (both Corvus-supplied).", sourceIds: ["corvus_presentation_2026"] },
  { id: "wartsila", name: "Wärtsilä", type: COMPANY_TYPES.INTEGRATOR, country: "Finland", notes: "Integrator on Buquebus \"China Zorrilla\" (Corvus 42 MWh install). Also named AYK's \"Global strategic partner\" since 2022 — evidence of Wärtsilä working with both Corvus and a Corvus competitor on separate projects.", sourceIds: ["corvus_presentation_2026", "ayk_intro_eac"] },
  { id: "siemens", name: "Siemens", type: COMPANY_TYPES.INTEGRATOR, country: "Germany", notes: "Listed on AYK's partnership logo wall; relationship detail not specified.", sourceIds: ["ayk_intro_eac"] },

  // Shipyards / designers
  { id: "incat", name: "Incat", type: COMPANY_TYPES.SHIPYARD, country: "Australia", notes: "Shipyard and designer for Buquebus \"China Zorrilla\" (42 MWh Corvus install, world's largest battery-electric ship claim).", sourceIds: ["corvus_presentation_2026"] },
  { id: "eastern-shipbuilding", name: "Eastern Shipbuilding Group", type: COMPANY_TYPES.SHIPYARD, country: "USA", notes: "Shipyard for Washington State Ferries new hybrid-electric vessels (Corvus Dolphin Power NxtGen).", sourceIds: ["corvus_presentation_2026"] },
  { id: "lmg-marine", name: "LMG Marine", type: COMPANY_TYPES.DESIGNER, country: "Norway", notes: "Designer for BC Ferries New Major Vessels (4 hybrid-to-electric ferries, Corvus-supplied).", sourceIds: ["corvus_presentation_2026"] },
  { id: "elliott-bay-design-group", name: "Elliott Bay Design Group", type: COMPANY_TYPES.DESIGNER, country: "USA", notes: "Design credit shown on Washington State Ferries rendering.", sourceIds: ["corvus_presentation_2026"] },

  // Operators
  { id: "bc-ferries", name: "BC Ferries", type: COMPANY_TYPES.OPERATOR, country: "Canada", segment: "Ferry", notes: "10-vessel Island Class hybrid/electric fleet plus 4 New Major Vessels (172m, 2,100 pax) entering service from 2029, hybrid-to-electric — all Corvus-supplied. A large standardized fleet operator = strong fleet-expansion candidate.", sourceIds: ["corvus_presentation_2026"] },
  { id: "washington-state-ferries", name: "Washington State Ferries", type: COMPANY_TYPES.OPERATOR, country: "USA", segment: "Ferry", notes: "\"Ferry Electrification Plan\" — described by Corvus as the largest marine electrification effort in the US. 2 new hybrid-electric 160-auto ferries (2030-31, Corvus Dolphin Power NxtGen 13.2 MWh each) as the first phase of a larger stated program.", sourceIds: ["corvus_presentation_2026"] },
  { id: "buquebus", name: "Buquebus", type: COMPANY_TYPES.OPERATOR, country: "Argentina/Uruguay", segment: "Ferry", notes: "Operates the \"China Zorrilla,\" the world's largest battery-electric ship per Corvus (42 MWh), Argentina-Uruguay route starting 2026.", sourceIds: ["corvus_presentation_2026"] },
  { id: "red-white-fleet", name: "Red & White Fleet", type: COMPANY_TYPES.OPERATOR, country: "USA", segment: "Ferry", notes: "Hybrid passenger ferry \"Enhydra,\" San Francisco Bay — Corvus-supplied.", sourceIds: ["corvus_presentation_2026"] },
  { id: "alcatraz-city-cruises", name: "Alcatraz City Cruises", type: COMPANY_TYPES.OPERATOR, country: "USA", segment: "Ferry", notes: "Hybrid passenger ferries Flyer, Clipper, Islander — Corvus-supplied.", sourceIds: ["corvus_presentation_2026"] },
  { id: "statue-city-cruises", name: "Statue City Cruises", type: COMPANY_TYPES.OPERATOR, country: "USA", segment: "Ferry", notes: "Hybrid ferry fleet, vessels unnamed in source — Corvus-supplied.", sourceIds: ["corvus_presentation_2026"] },
  { id: "city-of-toronto", name: "City of Toronto", type: COMPANY_TYPES.OPERATOR, country: "Canada", segment: "Ferry", notes: "Operates \"Marilyn Bell I,\" Canada's first fully electric ferry — Corvus-supplied.", sourceIds: ["corvus_presentation_2026"] },
  { id: "brittany-ferries", name: "Brittany Ferries", type: COMPANY_TYPES.OPERATOR, country: "France/UK", segment: "Ferry", notes: "RoPax \"Saint-Malo\" — AYK delivered 12MWh x2 systems \"in 4 months\" per AYK's own milestone slide. A named Corvus-competitor win worth tracking.", sourceIds: ["ayk_intro_eac"] },
  { id: "wasaline", name: "Wasaline", type: COMPANY_TYPES.OPERATOR, country: "Finland/Sweden", segment: "Ferry", notes: "Hybrid RoPax, Finland-Sweden route, shown in AYK's reference-vessel grid.", sourceIds: ["ayk_intro_eac"] },
  { id: "forsea", name: "Forsea / Tycho Brahe route", type: COMPANY_TYPES.OPERATOR, country: "Sweden/Denmark", segment: "Ferry", notes: "Operates \"Tycho Brahe\" — used by AYK as a top-deck container-retrofit worked example (illustrative scenario, not a confirmed delivery, per source).", sourceIds: ["ayk_intro_eac"] },

  // Classification societies
  { id: "dnv", name: "DNV", type: COMPANY_TYPES.CLASS_SOCIETY, country: "Norway", notes: "2nd most active certifying society in MBF's dataset (~47 of 225 approvals). Certifies Corvus (cybersecurity class approval, Orca/Lighthouse control-system type approval, SOH method) and AYK.", sourceIds: ["mbf_tech_2026q3", "corvus_presentation_2026", "ayk_intro_eac"] },
  { id: "abs", name: "ABS", type: COMPANY_TYPES.CLASS_SOCIETY, country: "USA", sourceIds: ["mbf_tech_2026q3"] },
  { id: "bv", name: "Bureau Veritas", type: COMPANY_TYPES.CLASS_SOCIETY, country: "France", sourceIds: ["mbf_tech_2026q3"] },
  { id: "ccs", name: "China Classification Society", type: COMPANY_TYPES.CLASS_SOCIETY, country: "China", notes: "Most active certifying society in MBF's dataset (~50 of 225 approvals).", sourceIds: ["mbf_tech_2026q3"] },
  { id: "classnk", name: "ClassNK", type: COMPANY_TYPES.CLASS_SOCIETY, country: "Japan", sourceIds: ["mbf_tech_2026q3"] },
  { id: "irs", name: "Indian Register of Shipping", type: COMPANY_TYPES.CLASS_SOCIETY, country: "India", sourceIds: ["mbf_tech_2026q3"] },
  { id: "kr", name: "Korean Register", type: COMPANY_TYPES.CLASS_SOCIETY, country: "South Korea", sourceIds: ["mbf_tech_2026q3"] },
  { id: "lr", name: "Lloyd's Register", type: COMPANY_TYPES.CLASS_SOCIETY, country: "UK", sourceIds: ["mbf_tech_2026q3"] },
  { id: "rina", name: "RINA", type: COMPANY_TYPES.CLASS_SOCIETY, country: "Italy", sourceIds: ["mbf_tech_2026q3"] },

  // Government / regulatory
  { id: "transport-canada", name: "Transport Canada", type: COMPANY_TYPES.GOVERNMENT, country: "Canada", sourceIds: ["corvus_presentation_2026"] },
  { id: "uscg", name: "U.S. Coast Guard", type: COMPANY_TYPES.GOVERNMENT, country: "USA", notes: "18 Corvus-supplied vessels delivered/to-be-delivered per USCG & ASTM F3353.", sourceIds: ["corvus_presentation_2026"] },
  { id: "eu-base-project", name: "EU BASE Project", type: COMPANY_TYPES.GOVERNMENT, country: "EU", notes: "EU-funded research project; Corvus states it developed \"the first marine Battery passport\" as a BASE partner, ahead of the Feb 2027 EU Battery Passport mandate.", sourceIds: ["corvus_presentation_2026"] },
];

export function getCompany(id) {
  return COMPANIES.find((c) => c.id === id);
}
export function companyName(id) {
  return getCompany(id)?.name ?? id;
}

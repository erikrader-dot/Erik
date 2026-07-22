// Registry of the source documents uploaded for this build. Every "Fact" or
// "Inference" record elsewhere in src/data/*.js should cite one of these keys
// so the UI can render a traceable citation instead of an unsupported claim.
export const SOURCES = {
  mbf_tech_2026q3: {
    id: "mbf_tech_2026q3",
    shortName: "MBF Tech Report Q3'26",
    title: "Maritime Battery Forum — 2026 Q3 Maritime Battery Technology Report",
    org: "Maritime Battery Forum",
    date: "2026-Q3",
    pages: 48,
    fileName: "01_2026Q3MBFMaritimeBatteryTechnologyReport.pdf",
  },
  corvus_presentation_2026: {
    id: "corvus_presentation_2026",
    shortName: "Corvus Corporate Deck 2026",
    title: "Corvus Energy — Company Presentation 2026",
    org: "Corvus Energy",
    date: "2026",
    pages: 44,
    fileName: "02_Corvus_Company_Presentation_2026.pdf",
  },
  mbf_eu_ferry_2024: {
    id: "mbf_eu_ferry_2024",
    shortName: "MBF EU Ferry Market Dec'24",
    title: "Maritime Battery Forum — Battery-Powered Ferry Market in the EU",
    org: "Maritime Battery Forum",
    date: "2024-12",
    pages: 38,
    fileName: "03_MaritimeBatteryForumBatterypoweredferrymarketintheEUDecember20241.pdf",
  },
  ayk_intro_eac: {
    id: "ayk_intro_eac",
    shortName: "AYK Introduction (EAC)",
    title: "AYK — Introduction (EAC)",
    org: "AYK",
    date: "2026",
    pages: 68,
    fileName: "05_AYK_introduction_EAC.pdf",
  },
  echandia_2026: {
    id: "echandia_2026",
    shortName: "Echandia ‘Making Safe Safer’",
    title: "Echandia — Making Safe Safer",
    org: "Echandia",
    date: "2026",
    pages: 11,
    fileName: "06_Echandia_Making_Safe_Safer_2026v1.pdf",
  },
};

export const SOURCE_LIST = Object.values(SOURCES);

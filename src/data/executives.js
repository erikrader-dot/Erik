import { CLASSIFICATION, CONFIDENCE } from "../lib/schema";

// Executive Relationship Map + Executive/Organizational Appointment records.
// Only 3 individuals are named anywhere across the 5 source documents (all
// in public marketing decks, so their name/title/employer is public
// information). No CRM-relationship data (last interaction, relationship
// owner, relationship strength) exists in source for real people — those
// fields are marked "Not yet tracked" rather than invented. A handful of
// clearly-labeled illustrative contacts show what a populated CRM record
// looks like once Corvus's own account teams enter real data (see the
// Methodology page's data-entry design).
export const EXECUTIVES = [
  {
    id: "exec-kanestrom",
    name: "Efraim Kanestrom",
    title: "SVP Sales",
    companyId: "corvus",
    region: "Global (presenter of Corvus's global 2026 company deck)",
    roleInPurchasing: "Corvus-side sales leadership — not a customer-side purchasing role",
    technicalInfluence: "Not disclosed",
    commercialInfluence: "High (SVP Sales)",
    relationshipOwner: "Not applicable — internal Corvus executive",
    relationshipStrength: "Not applicable",
    lastInteraction: "Not tracked in this prototype",
    nextPlannedInteraction: "Not tracked in this prototype",
    sharedProjects: "Presented the full 2026 Corvus reference-project portfolio (see Reference Project Matcher)",
    knownProfessionalConnections: "Not disclosed in source",
    strategicImportance: "High — most senior named Corvus sales executive across the reviewed documents",
    informationSource: "Corvus Company Presentation 2026, title slide",
    privacyClassification: "Public (named presenter of a public company deck)",
    confidence: CONFIDENCE.HIGH,
    classification: CLASSIFICATION.FACT,
    sourceIds: ["corvus_presentation_2026"],
  },
  {
    id: "exec-kruger",
    name: "Chris Kruger",
    title: "Founder & President",
    companyId: "ayk",
    region: "Global (AYK admin center Shenzhen; legal seat Andorra)",
    roleInPurchasing: "Not applicable — competitor executive, not a Corvus customer contact",
    technicalInfluence: "High — credited in AYK's own deck as the technical architect behind Corvus's 1st-generation marine battery (as Corvus CTO, 2014) and PBES's 2nd-generation battery (as PBES Founder/CTO, 2018) before founding AYK",
    commercialInfluence: "High (Founder & President of a direct Corvus competitor)",
    relationshipOwner: "Not applicable — competitor executive",
    relationshipStrength: "Not applicable (adversarial/competitive, not a partnership)",
    lastInteraction: "Not applicable",
    nextPlannedInteraction: "Not applicable",
    sharedProjects: "None as competitors; historically was Corvus's own CTO in 2014",
    knownProfessionalConnections: "Former CTO of Corvus (2014); former Founder/CTO of PBES (2018) — direct career lineage through two companies now tracked as competitors",
    strategicImportance: "Critical for competitive intelligence — AYK's founder has first-hand knowledge of Corvus's early technical architecture",
    informationSource: "AYK Introduction (EAC) deck, p.3",
    privacyClassification: "Public (named founder/president in a public company deck)",
    confidence: CONFIDENCE.HIGH,
    classification: CLASSIFICATION.FACT,
    sourceIds: ["ayk_intro_eac"],
  },
  {
    id: "exec-small",
    name: "Trevor Small",
    title: "CEO, Echandia Marine North America",
    companyId: "echandia",
    region: "North America",
    roleInPurchasing: "Not applicable — competitor executive",
    technicalInfluence: "Not disclosed beyond presenting Echandia's safety-technology positioning",
    commercialInfluence: "High (CEO of the North America subsidiary)",
    relationshipOwner: "Not applicable — competitor executive",
    relationshipStrength: "Not applicable",
    lastInteraction: "Not applicable",
    nextPlannedInteraction: "Not applicable",
    sharedProjects: "None",
    knownProfessionalConnections: "Not disclosed in source",
    strategicImportance: "Medium — leads Echandia's North America go-to-market and safety-technology messaging",
    informationSource: "Echandia \"Making Safe Safer\" deck, title slide",
    privacyClassification: "Public (named presenter/CEO in a public company deck)",
    confidence: CONFIDENCE.HIGH,
    classification: CLASSIFICATION.FACT,
    sourceIds: ["echandia_2026"],
  },
  {
    id: "exec-example-1",
    name: "Illustrative Example Contact",
    title: "VP Fleet Engineering (example role)",
    companyId: null,
    companyName: "Example Ferry Operator (fictional — not a real company)",
    region: "Illustrative",
    roleInPurchasing: "Final technical approver (example)",
    technicalInfluence: "High (example)",
    commercialInfluence: "Medium (example)",
    relationshipOwner: "Example Corvus Account Manager",
    relationshipStrength: "Example: Strong — 3 documented in-person meetings in the last 12 months",
    lastInteraction: "Example: 2026-05-14, shipyard site visit",
    nextPlannedInteraction: "Example: 2026-09-01, quarterly business review",
    sharedProjects: "Example: 2 reference vessels",
    knownProfessionalConnections: "Example: previously worked with a current Corvus regional sales director at a prior employer",
    strategicImportance: "Example: High — sole technical gatekeeper for a multi-vessel fleet renewal program",
    informationSource: "Illustrative example — not from any source document",
    privacyClassification: "N/A (fictional record for demonstration)",
    confidence: CONFIDENCE.LOW,
    classification: CLASSIFICATION.EXAMPLE,
    sourceIds: [],
  },
];

export const RELATIONSHIP_MAP_GAPS = {
  accountsWithNoExecutiveSponsor: [
    "BC Ferries", "Washington State Ferries", "Buquebus", "Brittany Ferries", "Wasaline",
  ],
  note: "Every real named account in this prototype currently has zero tracked Corvus-side executive relationship — because no source document contains Corvus CRM data. This is itself the platform's first Executive Relationship Map finding: the data-entry process (see Methodology page) needs to be adopted before this tool has anything real to show beyond company-level facts.",
};

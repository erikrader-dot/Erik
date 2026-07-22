import { CLASSIFICATION, CONFIDENCE } from "../lib/schema";

// Customer & Account Risk Monitor. Two REAL, document-grounded risk entries
// exist (Wärtsilä's dual relationship, and Brittany Ferries' competitor
// standardization). The rest are illustrative examples showing other risk
// signal types the tool is designed to catch, clearly labeled — no
// dissatisfaction or risk is asserted for any real account without a cited
// signal, per the platform's design rule.
export const ACCOUNT_RISKS = [
  {
    id: "risk-wartsila",
    accountName: "Wärtsilä (integrator)",
    companyId: "wartsila",
    riskScore: 62,
    signals: [
      { type: "New partnership with a competitor", evidence: "Wärtsilä named as AYK's \"Global strategic partner\" since 2022, per AYK's own deck.", confidence: CONFIDENCE.HIGH },
    ],
    commercialImpact: "Wärtsilä is Corvus's integrator on the 42 MWh Buquebus flagship project — losing preferred status here would affect Corvus's largest publicized single install's integrator relationship and any future Wärtsilä-integrated bids.",
    urgency: "Medium",
    recommendedResponse: "Executive-level relationship review with Wärtsilä; do not wait for the next RFP to re-engage.",
    responsibleOwner: "Not disclosed in source — recommend a Corvus regional VP",
    relationshipToStrengthen: "Wärtsilä global partnership team",
    nextAction: "Schedule an executive business review referencing the Buquebus project's success",
    classification: CLASSIFICATION.INFERENCE,
    sourceIds: ["corvus_presentation_2026", "ayk_intro_eac"],
  },
  {
    id: "risk-brittany-ferries",
    accountName: "Brittany Ferries",
    companyId: "brittany-ferries",
    riskScore: 40,
    signals: [
      { type: "Competitor selected for a recent vessel", evidence: "AYK delivered 12MWh x2 systems to Brittany Ferries' Saint-Malo, per AYK's own milestone slide.", confidence: CONFIDENCE.HIGH },
    ],
    commercialImpact: "Not a lost Corvus account (no prior relationship found) — but represents a major European operator now standardizing on a competitor for at least one vessel.",
    urgency: "Low (target-account risk, not an existing-account risk)",
    recommendedResponse: "Track for future newbuild/retrofit opportunities; open a relationship rather than treat as a loss.",
    responsibleOwner: "Not disclosed in source — recommend Corvus Europe sales lead",
    relationshipToStrengthen: "None yet established",
    nextAction: "Initial outreach / account mapping",
    classification: CLASSIFICATION.INFERENCE,
    sourceIds: ["ayk_intro_eac"],
  },
  {
    id: "risk-example-1",
    accountName: "Illustrative Example Operator",
    companyId: null,
    riskScore: 74,
    signals: [
      { type: "Expiring service or warranty agreement", evidence: "Illustrative example — no source document contains customer-level warranty/service contract data.", confidence: CONFIDENCE.LOW },
      { type: "Lack of recent Corvus engagement", evidence: "Illustrative example.", confidence: CONFIDENCE.LOW },
    ],
    commercialImpact: "Illustrative — example: multi-vessel fleet account, meaningful renewal revenue at stake",
    urgency: "Illustrative: High",
    recommendedResponse: "Illustrative: schedule a service-contract renewal review before expiry",
    responsibleOwner: "Illustrative example account manager",
    relationshipToStrengthen: "Illustrative",
    nextAction: "Illustrative",
    classification: CLASSIFICATION.EXAMPLE,
    sourceIds: [],
  },
];

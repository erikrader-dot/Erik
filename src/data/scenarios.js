import { CONFIDENCE } from "../lib/schema";

// Competitor Response Simulator ("What Would the Competitor Do?"). Every
// entry here is SCENARIO ANALYSIS, not verified fact — evidence fields cite
// real documented competitor behavior/statements where available to ground
// the prediction; where no such evidence exists, that is stated explicitly.
export const SCENARIOS = [
  {
    id: "scn-lfp-launch",
    proposedAction: "Corvus leads with Blue Whale NxtGen (LFP) as the default recommendation for cost-sensitive newbuild and retrofit customers",
    competitorsAffected: ["ayk", "echandia"],
    responses: [
      {
        companyId: "ayk",
        likelyResponse: "Emphasize its own LFP chemistry safety-testing marketing (documented thermal-runaway overcharge comparison video showing LFP vs. NMC) and lean harder into its fast-retrofit / low-CAPEX positioning to compete on total delivered cost and speed rather than chemistry alone.",
        evidence: "AYK's own deck already runs an LFP-vs-NMC safety comparison and markets \"installed and commissioned in a few days instead of months.\"",
        probability: "High",
        marketImpact: "Price/speed competition intensifies in the retrofit segment specifically",
        confidence: CONFIDENCE.MEDIUM,
      },
      {
        companyId: "echandia",
        likelyResponse: "Continue to differentiate on fire-suppression/thermal-runaway-control technology (foam suppression) rather than compete on chemistry or price directly, since its 2026 marketing is built entirely around that angle.",
        evidence: "Echandia's reviewed deck contains no chemistry, pricing, or cost messaging at all — 100% of its content is thermal-runaway safety technology.",
        probability: "Medium-High",
        marketImpact: "Limited direct price pressure from Echandia; safety-narrative competition instead",
        confidence: CONFIDENCE.MEDIUM,
      },
    ],
    unintendedConsequences: "A price-led LFP push could commoditize the conversation and pull Corvus away from the safety/technology differentiation it currently leads on (cell-level thermal-runaway containment, DNV cybersecurity approval).",
    recommendedPreparation: "Pair any LFP cost-leadership messaging with Corvus's existing safety and digital-services differentiation so the conversation doesn't collapse into price-only competition.",
    indicatorsToWatch: ["AYK press releases or case studies emphasizing delivery speed on new deals", "Echandia expanding beyond safety messaging into pricing/chemistry claims (would signal a strategy shift)"],
    sourceIds: ["ayk_intro_eac", "echandia_2026"],
  },
  {
    id: "scn-integrator-partnership",
    proposedAction: "Corvus signs an exclusivity-leaning strategic partnership with Wärtsilä",
    competitorsAffected: ["ayk"],
    responses: [
      {
        companyId: "ayk",
        likelyResponse: "Deepen its existing named strategic partnership with Wärtsilä (since 2022) to defend its position, and/or pursue an equivalent exclusive-leaning arrangement with a different major integrator (e.g. ABB or Siemens, both on AYK's own partner list) to keep integrator coverage broad.",
        evidence: "AYK's own deck already names Wärtsilä as a 'Global strategic partner' since 2022, and separately lists ABB and Siemens on its partnership logo wall.",
        probability: "Medium",
        marketImpact: "Could trigger a broader integrator land-grab across both companies",
        confidence: CONFIDENCE.LOW,
      },
    ],
    unintendedConsequences: "An exclusivity push could alienate other integrators (ABB, Siemens) currently open to working with Corvus, pushing them toward AYK instead.",
    recommendedPreparation: "Model the relationship as a strengthened-but-non-exclusive partnership rather than a hard lock-in, to avoid pushing other integrators toward the documented AYK partner list.",
    indicatorsToWatch: ["Any joint Corvus-Wärtsilä press announcement", "AYK announcing a new integrator partnership"],
    sourceIds: ["ayk_intro_eac"],
  },
  {
    id: "scn-baas",
    proposedAction: "Corvus introduces a Battery-as-a-Service (BaaS) commercial model",
    competitorsAffected: ["ayk", "echandia"],
    responses: [
      {
        companyId: "ayk",
        likelyResponse: "No evidence in source of AYK pursuing a service/subscription commercial model — its documented strategy is manufacturing capacity, certification breadth, and delivery speed. A BaaS move by Corvus is plausible white space rather than a contested area.",
        evidence: "No BaaS, leasing, or subscription language appears anywhere in AYK's introduction deck.",
        probability: "Low (competitor response, in the near term)",
        marketImpact: "Potential first-mover advantage for Corvus if no immediate competitor response materializes",
        confidence: CONFIDENCE.LOW,
      },
    ],
    unintendedConsequences: "A BaaS model shifts Corvus's own revenue recognition from upfront hardware sales to recurring revenue — a real internal financial-planning consideration independent of competitor response.",
    recommendedPreparation: "Treat this as a potential differentiation opportunity rather than a defensive move, but validate residual-value and second-life assumptions before committing (see TCO Calculator).",
    indicatorsToWatch: ["Any competitor announcement of a leasing, subscription, or as-a-service commercial model"],
    sourceIds: ["ayk_intro_eac"],
  },
];

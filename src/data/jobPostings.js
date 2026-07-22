import { CLASSIFICATION, CONFIDENCE } from "../lib/schema";

// Competitor Hiring & Organizational Signals. None of the five source
// documents contain actual job-posting or org-chart data, so every record
// here is an ILLUSTRATIVE EXAMPLE showing the kind of signal this tool is
// built to track, not an observed real posting. The three real, named
// individuals we do have (from the source decks) are modeled separately in
// executives.js as confirmed appointments, not here.
export const JOB_POSTINGS = [
  {
    id: "job-1",
    companyId: "ayk",
    role: "Regional Sales Director, Northern Europe",
    location: "Rotterdam, Netherlands (illustrative)",
    department: "Sales",
    strategySignal: "Expansion into a new regional sales territory adjacent to AYK's documented UK/France and Nordics deliveries",
    confidence: CONFIDENCE.LOW,
    possibleImpact: "Increased competitive pressure on Corvus's Northern European ferry accounts",
    recommendedAction: "Watch for a second, corroborating signal (e.g. a distributor announcement or trade-show presence) before treating this as a confirmed expansion",
    classification: CLASSIFICATION.EXAMPLE,
    disclaimer: "Illustrative example — not an observed real job posting. Demonstrates the signal type only.",
    sourceIds: [],
  },
  {
    id: "job-2",
    companyId: "ayk",
    role: "Port Electrification Business Development Lead",
    location: "Singapore (illustrative)",
    department: "Business Development",
    strategySignal: "Consistent with AYK's own disclosed 2025-2026 strategy statements (\"Shore-to-Ship Integration,\" Asia-Pacific expansion) — this is the one hiring-signal example directly corroborated by a real source fact.",
    confidence: CONFIDENCE.MEDIUM,
    possibleImpact: "AYK building out port/shore-power adjacent revenue, a market Corvus should monitor even though it is not core to Corvus's current disclosed offering",
    recommendedAction: "Track AYK's shore-to-ship pilot announcements; consider whether Corvus's own service organization should scope port-electrification adjacencies",
    classification: CLASSIFICATION.EXAMPLE,
    disclaimer: "Illustrative example posting — but the underlying strategy direction (shore-to-ship, Asia-Pacific) is corroborated by AYK's own 2026 deck, unlike job-1.",
    sourceIds: ["ayk_intro_eac"],
  },
  {
    id: "job-3",
    companyId: "echandia",
    role: "Fire Safety Systems Engineer",
    location: "Sweden (illustrative)",
    department: "Engineering",
    strategySignal: "Consistent with Echandia's documented 2026 marketing focus on thermal-runaway suppression (FIFI4 Strike Foam, dual detection) — plausible but not a confirmed posting.",
    confidence: CONFIDENCE.LOW,
    possibleImpact: "Reinforces safety as Echandia's primary competitive angle rather than energy density or cost",
    recommendedAction: "Ensure Corvus sales materials proactively address thermal-runaway suppression, not just cell-level containment, when competing against Echandia",
    classification: CLASSIFICATION.EXAMPLE,
    disclaimer: "Illustrative example — not an observed real job posting.",
    sourceIds: ["echandia_2026"],
  },
  {
    id: "job-4",
    companyId: "ayk",
    role: "Naval & Defense Program Manager",
    location: "Not specified (illustrative)",
    department: "Business Development",
    strategySignal: "No source evidence AYK is pursuing defense programs — included only to illustrate how the tool would flag a segment-expansion signal if such a posting appeared.",
    confidence: CONFIDENCE.LOW,
    possibleImpact: "Would represent AYK entering a segment Corvus has an established position in (Corvus's own deck cites '1st ESS for DP3' and other defense/OSV milestones)",
    recommendedAction: "No action warranted on a single illustrative example — shown for tool demonstration only",
    classification: CLASSIFICATION.EXAMPLE,
    disclaimer: "Purely illustrative — do not treat as a real signal.",
    sourceIds: [],
  },
];

export const HIRING_PATTERN_GUIDANCE =
  "Per the platform's design brief: a single job posting is never treated as proof of strategy. This page is built to require multiple corroborating postings, executive appointments, or public statements (like job-2 above, which is corroborated by AYK's own 2026 strategy slide) before elevating a hiring signal into an Early-Warning alert.";

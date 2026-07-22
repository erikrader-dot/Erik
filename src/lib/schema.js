// Shared vocabulary used across every advanced-record data file.
// Every "advanced record" in the platform (per the ADVANCED DATABASE RECORDS
// spec) carries this common envelope so the UI can render provenance and
// confidence consistently instead of presenting inference as fact.

export const CLASSIFICATION = {
  FACT: "Fact",
  INFERENCE: "Inference",
  EXAMPLE: "Illustrative Example",
};

export const CLASSIFICATION_HELP = {
  [CLASSIFICATION.FACT]: "Directly stated in a cited source document.",
  [CLASSIFICATION.INFERENCE]: "A reasoned estimate built on documented facts — not itself stated in a source.",
  [CLASSIFICATION.EXAMPLE]:
    "Synthetic sample data illustrating how this tool works. No source document supports this specific record — replace with real CRM/field data before commercial use.",
};

export const CONFIDENCE = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

export const RELATIONSHIP_STATUS = {
  EXPANDING: "Expanding",
  STABLE: "Stable",
  AT_RISK: "At Risk",
  DECLINING: "Declining",
  NEW_OPPORTUNITY: "New Opportunity",
  INSUFFICIENT: "Insufficient Information",
};

export const RECORD_STATUS = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  MONITORING: "Monitoring",
  CLOSED: "Closed",
};

export const IMPORTANCE = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

// Chemistry / segment vocab, used for filtering across pages.
export const CHEMISTRIES = ["NMC", "LFP", "NCA", "LTO", "Unknown"];
export const SEGMENTS = ["Ferry", "Offshore", "Cruise", "Defense", "Workboat", "Cargo/Merchant", "Yacht"];

export function badgeToneForClassification(classification) {
  switch (classification) {
    case CLASSIFICATION.FACT:
      return "emerald";
    case CLASSIFICATION.INFERENCE:
      return "amber";
    case CLASSIFICATION.EXAMPLE:
      return "slate";
    default:
      return "slate";
  }
}

export function badgeToneForConfidence(confidence) {
  switch (confidence) {
    case CONFIDENCE.HIGH:
      return "emerald";
    case CONFIDENCE.MEDIUM:
      return "amber";
    case CONFIDENCE.LOW:
      return "rose";
    default:
      return "slate";
  }
}

export function badgeToneForStatus(status) {
  switch (status) {
    case RELATIONSHIP_STATUS.EXPANDING:
      return "emerald";
    case RELATIONSHIP_STATUS.STABLE:
      return "sky";
    case RELATIONSHIP_STATUS.AT_RISK:
      return "amber";
    case RELATIONSHIP_STATUS.DECLINING:
      return "rose";
    case RELATIONSHIP_STATUS.NEW_OPPORTUNITY:
      return "violet";
    case RELATIONSHIP_STATUS.INSUFFICIENT:
      return "slate";
    default:
      return "slate";
  }
}

export function badgeToneForImportance(importance) {
  switch (importance) {
    case IMPORTANCE.CRITICAL:
      return "rose";
    case IMPORTANCE.HIGH:
      return "amber";
    case IMPORTANCE.MEDIUM:
      return "sky";
    case IMPORTANCE.LOW:
      return "slate";
    default:
      return "slate";
  }
}

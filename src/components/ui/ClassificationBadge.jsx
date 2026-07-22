import Badge from "./Badge";
import { CLASSIFICATION_HELP, badgeToneForClassification, badgeToneForConfidence } from "../../lib/schema";

export function ClassificationBadge({ classification }) {
  if (!classification) return null;
  return (
    <Badge tone={badgeToneForClassification(classification)} title={CLASSIFICATION_HELP[classification]}>
      {classification}
    </Badge>
  );
}

export function ConfidenceBadge({ confidence }) {
  if (!confidence) return null;
  return <Badge tone={badgeToneForConfidence(confidence)}>{confidence} confidence</Badge>;
}

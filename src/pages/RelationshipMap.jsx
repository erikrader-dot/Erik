import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import DataTable from "../components/ui/DataTable";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { ClassificationBadge } from "../components/ui/ClassificationBadge";
import { EXECUTIVES, RELATIONSHIP_MAP_GAPS } from "../data/executives";
import { companyName } from "../data/companies";

export default function RelationshipMap() {
  return (
    <div>
      <PageHeader
        eyebrow="Page 23"
        title="Executive Relationship Map"
        description="Maps relationships across Corvus, competitors, integrators, shipyards, designers, operators, and regulators — using only publicly named individuals from the source decks, plus illustrative examples of a fully populated CRM record."
      />

      <Card className="mb-6 border-sky-200 bg-sky-50/60 dark:border-sky-900 dark:bg-sky-500/10">
        <div className="text-sm font-medium text-sky-800 dark:text-sky-300">First finding from this build: a coverage gap</div>
        <p className="mt-1 text-xs text-sky-700 dark:text-sky-400">
          Accounts with no tracked Corvus executive sponsor in this prototype: {RELATIONSHIP_MAP_GAPS.accountsWithNoExecutiveSponsor.join(", ")}. {RELATIONSHIP_MAP_GAPS.note}
        </p>
      </Card>

      <Section title="Named contacts">
        <DataTable
          getRowKey={(r) => r.id}
          columns={[
            { key: "name", label: "Name" },
            { key: "title", label: "Title" },
            { key: "companyId", label: "Company", render: (r) => r.companyId ? companyName(r.companyId) : r.companyName },
            { key: "strategicImportance", label: "Strategic Importance" },
            { key: "classification", label: "", noSort: true, render: (r) => <ClassificationBadge classification={r.classification} /> },
          ]}
          rows={EXECUTIVES}
        />
      </Section>

      <Section title="Contact detail">
        <div className="space-y-4">
          {EXECUTIVES.map((e) => (
            <Card key={e.id + "-d"}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{e.name} <span className="font-normal text-slate-400">— {e.title}, {e.companyId ? companyName(e.companyId) : e.companyName}</span></div>
                <Badge tone="slate">{e.privacyClassification}</Badge>
              </div>
              <div className="mt-3 grid gap-2 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-2">
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Known professional connections: </span>{e.knownProfessionalConnections}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Relationship owner: </span>{e.relationshipOwner}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Relationship strength: </span>{e.relationshipStrength}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Last / next interaction: </span>{e.lastInteraction} / {e.nextPlannedInteraction}</p>
                <p><span className="font-medium text-slate-700 dark:text-slate-300">Information source: </span>{e.informationSource}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

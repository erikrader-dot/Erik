import { SOURCES } from "../../data/sources";

// Renders a small citation chip for a source document key (see data/sources.js).
export default function SourceTag({ sourceId, page }) {
  const source = SOURCES[sourceId];
  if (!source) return <span className="text-xs italic text-slate-400">Unsourced</span>;
  return (
    <span
      className="inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[11px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
      title={source.title}
    >
      {source.shortName}
      {page ? ` p.${page}` : ""}
    </span>
  );
}

export default function EmptyState({ title = "Nothing here yet", description }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
      <div className="text-sm font-medium text-slate-600 dark:text-slate-300">{title}</div>
      {description && <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{description}</div>}
    </div>
  );
}

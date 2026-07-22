export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">{eyebrow}</div>
        )}
        <h1 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-50">{title}</h1>
        {description && <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

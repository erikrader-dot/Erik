import Card from "./Card";

export default function StatCard({ label, value, sub, tone = "slate" }) {
  const toneClass =
    {
      emerald: "text-emerald-600 dark:text-emerald-400",
      amber: "text-amber-600 dark:text-amber-400",
      rose: "text-rose-600 dark:text-rose-400",
      sky: "text-sky-600 dark:text-sky-400",
      slate: "text-slate-900 dark:text-slate-100",
    }[tone] || "text-slate-900 dark:text-slate-100";

  return (
    <Card>
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className={`mt-1.5 text-2xl font-semibold ${toneClass}`}>{value}</div>
      {sub && <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</div>}
    </Card>
  );
}

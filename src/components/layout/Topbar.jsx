import { useLocation } from "react-router-dom";
import { ALL_NAV_ITEMS } from "../../lib/nav";

export default function Topbar({ onMenuClick }) {
  const location = useLocation();
  const current = ALL_NAV_ITEMS.find((item) => item.to === location.pathname);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 sm:px-6">
      <button
        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        onClick={onMenuClick}
        aria-label="Toggle navigation"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </button>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{current?.label ?? "Corvus Sales Intelligence"}</div>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/30">
          Prototype build — mixed sourced &amp; illustrative data
        </span>
      </div>
    </header>
  );
}

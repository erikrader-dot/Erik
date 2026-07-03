export default function TabNavigation({ tabs, activeTab, onChange }) {
  return (
    <nav className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div
        className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 sm:px-6"
        role="tablist"
        aria-label="Site sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onChange(tab.id)}
            className={`whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green ${
              activeTab === tab.id
                ? "border-brand-green text-brand-green"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const STATS = [
  { key: "calories", label: "Calories", color: "text-gray-900" },
  { key: "protein", label: "Protein", color: "text-rose-600" },
  { key: "carbs", label: "Carbs", color: "text-amber-600" },
  { key: "fat", label: "Fat", color: "text-sky-600" },
];

function StatsRow({ nutrition, compact }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {STATS.map(({ key, label, color }) => (
        <div key={key} className="text-center">
          <p className={`font-bold ${color} ${compact ? "text-xs" : "text-sm"}`}>
            {nutrition[key]}
          </p>
          <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function NutritionLabel({ nutrition, nutritionWithAvocado, compact = false }) {
  if (!nutrition) return null;

  return (
    <div
      className={`rounded-lg border border-gray-100 bg-gray-50 ${compact ? "p-2" : "p-3"}`}
    >
      {nutritionWithAvocado ? (
        <div className="space-y-2">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Base
            </p>
            <StatsRow nutrition={nutrition} compact={compact} />
          </div>
          <div className="border-t border-gray-200 pt-2">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              With Avocado
            </p>
            <StatsRow nutrition={nutritionWithAvocado} compact={compact} />
          </div>
        </div>
      ) : (
        <StatsRow nutrition={nutrition} compact={compact} />
      )}
    </div>
  );
}

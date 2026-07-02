import MealImage from "./MealImage";

export default function MealCard({ meal }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <MealImage
          src={meal.image}
          alt={meal.name}
          emoji={meal.emoji}
          className="h-48 w-full"
        />
        {meal.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-black shadow">
            {meal.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {meal.emoji} {meal.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-green">
          {meal.weight}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {meal.description}
        </p>
      </div>
    </div>
  );
}

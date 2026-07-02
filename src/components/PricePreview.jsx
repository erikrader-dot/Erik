import { formatCurrency } from "../utils/format";

export default function PricePreview({ planWeeks, mealsPerWeek, planInfo }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Price Preview
      </h3>

      {!planWeeks || !mealsPerWeek ? (
        <p className="mt-4 text-sm text-gray-500">
          Choose a plan length and meals per week to see your price.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          <Row label="Plan Length" value={`${planWeeks}-Week Plan`} />
          <Row label="Meals Per Week" value={mealsPerWeek} />
          <Row label="Total Meals" value={planInfo.totalMeals} />
          <Row
            label="Price Per Meal"
            value={formatCurrency(planInfo.pricePerMeal)}
          />
          <div className="my-2 border-t border-dashed border-gray-200" />
          <Row
            label="Base Plan Total"
            value={formatCurrency(planInfo.total)}
            emphasize
          />
        </div>
      )}
    </div>
  );
}

function Row({ label, value, emphasize }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-sm ${emphasize ? "font-semibold text-gray-900" : "text-gray-500"}`}>
        {label}
      </span>
      <span
        className={
          emphasize
            ? "text-lg font-bold text-brand-green"
            : "text-sm font-medium text-gray-800"
        }
      >
        {value}
      </span>
    </div>
  );
}

import { formatCurrency } from "../utils/format";

export default function OrderSummary({
  planWeeks,
  mealsPerWeek,
  totalMealsNeeded,
  mealsSelectedCount,
  baseTotal,
  addOnsTotal,
  grandTotal,
  actionLabel,
  onAction,
  actionDisabled,
  helperText,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Order Summary
      </h3>

      <div className="mt-4 space-y-2.5 text-sm">
        <Row label="Plan" value={`${planWeeks}-Week · ${mealsPerWeek}/wk`} />
        <Row
          label="Meals Selected"
          value={`${mealsSelectedCount} / ${totalMealsNeeded}`}
          warn={mealsSelectedCount < totalMealsNeeded}
        />
        <Row label="Base Plan Total" value={formatCurrency(baseTotal)} />
        <Row label="Add-Ons Total" value={formatCurrency(addOnsTotal)} />
        <div className="my-1 border-t border-dashed border-gray-200" />
        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-bold text-gray-900">
            Grand Total
          </span>
          <span className="text-xl font-extrabold text-brand-green">
            {formatCurrency(grandTotal)}
          </span>
        </div>
      </div>

      {onAction && (
        <button
          onClick={onAction}
          disabled={actionDisabled}
          className="mt-6 w-full rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          {actionLabel}
        </button>
      )}
      {helperText && actionDisabled && (
        <p className="mt-3 text-center text-xs text-gray-400">{helperText}</p>
      )}
    </div>
  );
}

function Row({ label, value, warn }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span
        className={`font-medium ${warn ? "text-amber-600" : "text-gray-800"}`}
      >
        {value}
      </span>
    </div>
  );
}

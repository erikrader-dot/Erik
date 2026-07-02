import { useState } from "react";
import { meals } from "../data/meals";
import { addOns } from "../data/addOns";
import { business } from "../data/business";
import { formatCurrency } from "../utils/format";
import { buildReceiptText } from "../utils/receipt";

function mealById(id) {
  return meals.find((m) => m.id === id);
}

function addOnNames(ids) {
  if (!ids.length) return "None";
  return ids
    .map((id) => addOns.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(", ");
}

export default function Receipt({ order, onNewOrder }) {
  const [copied, setCopied] = useState(false);
  const {
    customer,
    planWeeks,
    mealsPerWeek,
    planInfo,
    selections,
    addOnsTotal,
    grandTotal,
    generatedAt,
  } = order;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildReceiptText(order));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still select/copy the text manually.
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="no-print mx-auto mb-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Receipt
          </h2>
          <p className="mt-3 text-gray-600">
            Follow the steps below to complete your order.
          </p>
        </div>

        <div className="print-area rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b-2 border-black pb-4 text-center">
            <h3 className="text-xl font-extrabold uppercase tracking-wide text-gray-900">
              {business.name} Receipt
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Generated {generatedAt}
            </p>
          </div>

          <div className="mt-5 space-y-1.5 text-sm">
            <InfoRow label="Customer" value={customer.name} />
            <InfoRow label="Phone" value={customer.phone} />
            <InfoRow label="Plan" value={`${planWeeks}-Week Plan`} />
            <InfoRow label="Meals Per Week" value={mealsPerWeek} />
            <InfoRow label="Total Meals" value={planInfo.totalMeals} />
            <InfoRow
              label="Price Per Meal"
              value={formatCurrency(planInfo.pricePerMeal)}
            />
            <InfoRow
              label="Base Plan Total"
              value={formatCurrency(planInfo.total)}
            />
            <InfoRow
              label="Add-Ons Total"
              value={formatCurrency(addOnsTotal)}
            />
            <div className="!mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
              <span className="text-base font-bold text-gray-900">
                Final Total
              </span>
              <span className="text-xl font-extrabold text-brand-green">
                {formatCurrency(grandTotal)}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {selections.map((week, weekIndex) => (
              <div key={weekIndex}>
                <h4 className="mb-2 text-sm font-bold text-gray-900">
                  Week {weekIndex + 1}:
                </h4>
                <div className="space-y-2">
                  {week.map((slot, slotIndex) => {
                    const meal = mealById(slot.mealId);
                    return (
                      <div
                        key={slotIndex}
                        className="rounded-lg bg-gray-50 px-3 py-2 text-sm"
                      >
                        <p className="font-medium text-gray-800">
                          Meal {slotIndex + 1}: {meal?.name} —{" "}
                          {meal?.weight.replace("Approximately ", "")}
                        </p>
                        <p className="text-xs text-gray-500">
                          Add-ons: {addOnNames(slot.addOns)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 border-t border-gray-200 pt-4 text-sm">
            <div>
              <p className="font-bold text-gray-900">Pickup Notes:</p>
              <p className="text-gray-600">
                {customer.pickupTime || "None provided"}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Allergies / Food Notes:</p>
              <p className="text-gray-600">
                {customer.allergies || "None provided"}
              </p>
            </div>
            {customer.notes && (
              <div>
                <p className="font-bold text-gray-900">Additional Notes:</p>
                <p className="text-gray-600">{customer.notes}</p>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-lg border-2 border-brand-green bg-brand-green/10 p-4 text-center">
            <p className="font-bold text-gray-900">
              TEXT THIS RECEIPT TO {business.textNumberDisplay} AND ZELLE THE
              FINAL TOTAL. YOUR MEALS WILL BE STARTED AFTER PAYMENT IS
              RECEIVED.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Please text when you need the meals by and what time you are
              available for pickup.
            </p>
          </div>
        </div>

        <div className="no-print mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            onClick={handleCopy}
            className="rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-brand-green-dark hover:text-white"
          >
            {copied ? "Copied!" : "Copy Receipt"}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Print Receipt
          </button>
          <button
            onClick={onNewOrder}
            className="rounded-full border-2 border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400"
          >
            Start New Order
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

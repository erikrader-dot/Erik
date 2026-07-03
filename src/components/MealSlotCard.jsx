import { useState } from "react";
import { meals } from "../data/meals";
import { addOns } from "../data/addOns";
import { formatCurrency } from "../utils/format";
import MealImage from "./MealImage";
import AddOnsSelector from "./AddOnsSelector";
import NutritionLabel from "./NutritionLabel";

export default function MealSlotCard({
  weekNumber,
  slotNumber,
  slot,
  onSelectMeal,
  onToggleAddOn,
}) {
  const [addOnsOpen, setAddOnsOpen] = useState(false);
  const selectedMeal = meals.find((m) => m.id === slot.mealId) || null;
  const slotAddOnTotal = slot.addOns.reduce((sum, id) => {
    const addOn = addOns.find((a) => a.id === id);
    return sum + (addOn ? addOn.price : 0);
  }, 0);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          Week {weekNumber} · Meal {slotNumber}
        </span>
        {slot.mealId && (
          <span className="text-xs font-medium text-gray-400">
            {selectedMeal?.weight}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[140px_1fr]">
        <MealImage
          src={selectedMeal?.image}
          alt={selectedMeal?.name || "No meal selected"}
          className="h-32 w-full rounded-xl sm:h-full"
        />

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Choose a meal
          </label>
          <select
            value={slot.mealId || ""}
            onChange={(e) => onSelectMeal(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
          >
            <option value="" disabled>
              Select a meal…
            </option>
            {meals.map((meal) => (
              <option key={meal.id} value={meal.id}>
                {meal.name}
              </option>
            ))}
          </select>

          {selectedMeal && (
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              {selectedMeal.description}
            </p>
          )}
        </div>
      </div>

      {selectedMeal && (
        <div className="mt-4">
          <NutritionLabel
            nutrition={selectedMeal.nutrition}
            nutritionWithAvocado={selectedMeal.nutritionWithAvocado}
            compact
          />
        </div>
      )}

      {slot.mealId && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <button
            onClick={() => setAddOnsOpen((v) => !v)}
            className="flex w-full items-center justify-between text-sm font-semibold text-gray-700"
          >
            <span>
              Add-Ons{" "}
              {slot.addOns.length > 0 && (
                <span className="ml-1 text-brand-green">
                  ({slot.addOns.length} selected · +
                  {formatCurrency(slotAddOnTotal)})
                </span>
              )}
            </span>
            <span className="text-gray-400">{addOnsOpen ? "▲" : "▼"}</span>
          </button>

          {addOnsOpen && (
            <div className="mt-3">
              <AddOnsSelector
                selectedAddOns={slot.addOns}
                onToggle={onToggleAddOn}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

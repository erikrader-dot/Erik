import { addOns, addOnCategories } from "../data/addOns";
import { formatCurrency } from "../utils/format";

const CATEGORY_DOT_COLORS = {
  "Extra Protein": "bg-rose-500",
  "Extra Carbs": "bg-amber-500",
  "Extra Vegetables": "bg-teal-500",
  "Accessories / Toppings": "bg-violet-500",
};

export default function AddOnsSelector({ selectedAddOns, onToggle }) {
  return (
    <div className="space-y-4">
      {addOnCategories.map((category) => (
        <div key={category}>
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <span
              className={`h-1.5 w-1.5 rounded-full ${CATEGORY_DOT_COLORS[category] || "bg-gray-400"}`}
            />
            {category}
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {addOns
              .filter((a) => a.category === category)
              .map((addOn) => {
                const checked = selectedAddOns.includes(addOn.id);
                return (
                  <label
                    key={addOn.id}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2 text-sm transition ${
                      checked
                        ? "border-brand-green bg-brand-green/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggle(addOn.id)}
                        className="h-4 w-4 accent-brand-green"
                      />
                      <span className="text-gray-700">{addOn.name}</span>
                    </span>
                    <span className="font-medium text-gray-500">
                      +{formatCurrency(addOn.price)}
                    </span>
                  </label>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

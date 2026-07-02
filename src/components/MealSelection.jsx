import MealSlotCard from "./MealSlotCard";

export default function MealSelection({ selections, onSelectMeal, onToggleAddOn }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Select Your Meals
          </h2>
          <p className="mt-3 text-gray-600">
            Pick a meal for every slot below and customize with add-ons if
            you'd like.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {selections.map((week, weekIndex) => (
            <div key={weekIndex}>
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Week {weekIndex + 1}
              </h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {week.map((slot, slotIndex) => (
                  <MealSlotCard
                    key={slotIndex}
                    weekNumber={weekIndex + 1}
                    slotNumber={slotIndex + 1}
                    slot={slot}
                    onSelectMeal={(mealId) =>
                      onSelectMeal(weekIndex, slotIndex, mealId)
                    }
                    onToggleAddOn={(addOnId) =>
                      onToggleAddOn(weekIndex, slotIndex, addOnId)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

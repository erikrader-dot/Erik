import { meals } from "../data/meals";
import MealCard from "./MealCard";

export default function MealOptionsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            This Week's Meals
          </h2>
          <p className="mt-3 text-gray-600">
            Every meal is made fresh, portioned, and ready to heat. Take a
            look now — you'll pick your favorites in the next step.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}

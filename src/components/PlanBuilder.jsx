import { pricing, planLengthOptions, mealsPerWeekOptions } from "../data/pricing";
import PricePreview from "./PricePreview";

export default function PlanBuilder({
  planWeeks,
  mealsPerWeek,
  onChangeWeeks,
  onChangeMealsPerWeek,
  onContinue,
}) {
  const planInfo =
    planWeeks && mealsPerWeek ? pricing[planWeeks][mealsPerWeek] : null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Build Your Meal Plan
          </h2>
          <p className="mt-3 text-gray-600">
            Pick how long you want meals for and how many meals you want each
            week.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Plan Length
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {planLengthOptions.map((opt) => (
                  <button
                    key={opt.weeks}
                    onClick={() => onChangeWeeks(opt.weeks)}
                    className={`rounded-xl border-2 px-4 py-4 text-center transition ${
                      planWeeks === opt.weeks
                        ? "border-brand-green bg-brand-green/10 text-brand-green"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="block text-lg font-bold">
                      {opt.weeks}
                    </span>
                    <span className="block text-xs font-medium">
                      {opt.weeks === 1 ? "Week" : "Weeks"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Meals Per Week{" "}
                <span className="font-normal normal-case text-gray-400">
                  (max 5)
                </span>
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {mealsPerWeekOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => onChangeMealsPerWeek(n)}
                    className={`rounded-xl border-2 py-4 text-center text-lg font-bold transition ${
                      mealsPerWeek === n
                        ? "border-brand-green bg-brand-green/10 text-brand-green"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!planWeeks || !mealsPerWeek}
              onClick={onContinue}
              className="w-full rounded-full bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
            >
              Continue to Meal Selection
            </button>
          </div>

          <div className="lg:col-span-2">
            <PricePreview
              planWeeks={planWeeks}
              mealsPerWeek={mealsPerWeek}
              planInfo={planInfo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

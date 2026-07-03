import { useMemo, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import MealOptionsSection from "./MealOptionsSection";
import PlanBuilder from "./PlanBuilder";
import MealSelection from "./MealSelection";
import CustomerInfoForm from "./CustomerInfoForm";
import OrderSummary from "./OrderSummary";
import Receipt from "./Receipt";
import { pricing } from "../data/pricing";
import { addOns } from "../data/addOns";
import { formatCurrency } from "../utils/format";

const emptyCustomer = {
  name: "",
  phone: "",
  allergies: "",
  pickupTime: "",
  notes: "",
  futureMeals: "",
};

function buildEmptySelections(weeks, mealsPerWeek) {
  return Array.from({ length: weeks }, () =>
    Array.from({ length: mealsPerWeek }, () => ({ mealId: "", addOns: [] }))
  );
}

function addOnPrice(id) {
  return addOns.find((a) => a.id === id)?.price || 0;
}

export default function OrderMealsTab() {
  const [step, setStep] = useState("home");
  const [planWeeks, setPlanWeeks] = useState(null);
  const [mealsPerWeek, setMealsPerWeek] = useState(null);
  const [selections, setSelections] = useState([]);
  const [customer, setCustomer] = useState(emptyCustomer);
  const [order, setOrder] = useState(null);

  const builderRef = useRef(null);
  const selectionRef = useRef(null);

  const planInfo = useMemo(
    () => (planWeeks && mealsPerWeek ? pricing[planWeeks][mealsPerWeek] : null),
    [planWeeks, mealsPerWeek]
  );

  const mealsSelectedCount = useMemo(
    () =>
      selections.reduce(
        (sum, week) => sum + week.filter((slot) => slot.mealId).length,
        0
      ),
    [selections]
  );

  const addOnsTotal = useMemo(
    () =>
      selections.reduce(
        (sum, week) =>
          sum +
          week.reduce(
            (weekSum, slot) =>
              weekSum + slot.addOns.reduce((s, id) => s + addOnPrice(id), 0),
            0
          ),
        0
      ),
    [selections]
  );

  const grandTotal = (planInfo?.total || 0) + addOnsTotal;

  const goTo = (nextStep, ref) => {
    setStep(nextStep);
    requestAnimationFrame(() => {
      ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleStartBuilding = () => goTo("builder", builderRef);

  const handleContinueToSelection = () => {
    setSelections(buildEmptySelections(planWeeks, mealsPerWeek));
    goTo("selection", selectionRef);
  };

  const handleSelectMeal = (weekIndex, slotIndex, mealId) => {
    setSelections((prev) => {
      const next = prev.map((week) => week.map((slot) => ({ ...slot })));
      next[weekIndex][slotIndex].mealId = mealId;
      return next;
    });
  };

  const handleToggleAddOn = (weekIndex, slotIndex, addOnId) => {
    setSelections((prev) => {
      const next = prev.map((week) =>
        week.map((slot) => ({ ...slot, addOns: [...slot.addOns] }))
      );
      const slot = next[weekIndex][slotIndex];
      slot.addOns = slot.addOns.includes(addOnId)
        ? slot.addOns.filter((id) => id !== addOnId)
        : [...slot.addOns, addOnId];
      return next;
    });
  };

  const requiredCustomerFieldsFilled = Boolean(
    customer.name.trim() && customer.phone.trim() && customer.pickupTime.trim()
  );

  const canGenerateReceipt =
    planInfo &&
    mealsSelectedCount === planInfo.totalMeals &&
    requiredCustomerFieldsFilled;

  const handleGenerateReceipt = () => {
    if (!canGenerateReceipt) return;
    setOrder({
      customer,
      planWeeks,
      mealsPerWeek,
      planInfo,
      selections,
      addOnsTotal,
      grandTotal,
      generatedAt: new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });
    setStep("receipt");
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const handleNewOrder = () => {
    setStep("home");
    setPlanWeeks(null);
    setMealsPerWeek(null);
    setSelections([]);
    setCustomer(emptyCustomer);
    setOrder(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let helperText = "";
  if (planInfo && mealsSelectedCount < planInfo.totalMeals) {
    helperText = `Select ${planInfo.totalMeals - mealsSelectedCount} more meal(s) to continue.`;
  } else if (!requiredCustomerFieldsFilled) {
    helperText = "Fill out your name, phone, and pickup time to continue.";
  }

  return (
    <div>
      {step === "home" && (
        <>
          <HeroSection onStart={handleStartBuilding} />
          <MealOptionsSection />
          <div className="bg-white py-10 text-center">
            <button
              onClick={handleStartBuilding}
              className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-gray-800"
            >
              Build My Meal Plan
            </button>
          </div>
        </>
      )}

      {step === "builder" && (
        <div ref={builderRef}>
          <PlanBuilder
            planWeeks={planWeeks}
            mealsPerWeek={mealsPerWeek}
            onChangeWeeks={setPlanWeeks}
            onChangeMealsPerWeek={setMealsPerWeek}
            onContinue={handleContinueToSelection}
          />
        </div>
      )}

      {step === "selection" && planInfo && (
        <div ref={selectionRef} className="bg-gray-50 pb-28 lg:pb-16">
          <MealSelection
            selections={selections}
            onSelectMeal={handleSelectMeal}
            onToggleAddOn={handleToggleAddOn}
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <CustomerInfoForm customer={customer} onChange={setCustomer} />
              </div>
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-16">
                  <OrderSummary
                    planWeeks={planWeeks}
                    mealsPerWeek={mealsPerWeek}
                    totalMealsNeeded={planInfo.totalMeals}
                    mealsSelectedCount={mealsSelectedCount}
                    baseTotal={planInfo.total}
                    addOnsTotal={addOnsTotal}
                    grandTotal={grandTotal}
                    actionLabel="Generate Receipt"
                    onAction={handleGenerateReceipt}
                    actionDisabled={!canGenerateReceipt}
                    helperText={helperText}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-gray-500">
                  {mealsSelectedCount}/{planInfo.totalMeals} meals selected
                </p>
                <p className="text-lg font-extrabold text-brand-green">
                  {formatCurrency(grandTotal)}
                </p>
              </div>
              <button
                onClick={handleGenerateReceipt}
                disabled={!canGenerateReceipt}
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white disabled:bg-gray-200 disabled:text-gray-400"
              >
                Generate Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {step === "receipt" && order && (
        <Receipt order={order} onNewOrder={handleNewOrder} />
      )}
    </div>
  );
}

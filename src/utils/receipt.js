import { meals } from "../data/meals";
import { addOns } from "../data/addOns";
import { business } from "../data/business";
import { formatCurrency } from "./format";

function mealName(mealId) {
  return meals.find((m) => m.id === mealId)?.name || "Unknown Meal";
}

function mealWeight(mealId) {
  return meals.find((m) => m.id === mealId)?.weight || "";
}

function addOnNames(ids) {
  if (!ids.length) return "None";
  return ids
    .map((id) => addOns.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(", ");
}

// Builds a plain-text version of the receipt, suitable for texting.
export function buildReceiptText(order) {
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

  const lines = [];
  lines.push(`${business.name.toUpperCase()} RECEIPT`);
  lines.push("");
  lines.push(`Customer: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Plan: ${planWeeks}-Week Plan`);
  lines.push(`Meals Per Week: ${mealsPerWeek}`);
  lines.push(`Total Meals: ${planInfo.totalMeals}`);
  lines.push(`Price Per Meal: ${formatCurrency(planInfo.pricePerMeal)}`);
  lines.push(`Base Plan Total: ${formatCurrency(planInfo.total)}`);
  lines.push(`Add-Ons Total: ${formatCurrency(addOnsTotal)}`);
  lines.push(`Final Total: ${formatCurrency(grandTotal)}`);
  lines.push("");

  selections.forEach((week, weekIndex) => {
    lines.push(`Week ${weekIndex + 1}:`);
    week.forEach((slot, slotIndex) => {
      lines.push(
        `Meal ${slotIndex + 1}: ${mealName(slot.mealId)} — ${mealWeight(slot.mealId).replace("Approximately ", "")}`
      );
      lines.push(`Add-ons: ${addOnNames(slot.addOns)}`);
    });
    lines.push("");
  });

  lines.push("Pickup Notes:");
  lines.push(customer.pickupTime || "None provided");
  lines.push("");
  lines.push("Allergies / Food Notes:");
  lines.push(customer.allergies || "None provided");
  if (customer.notes) {
    lines.push("");
    lines.push("Additional Notes:");
    lines.push(customer.notes);
  }
  lines.push("");
  lines.push(
    `TEXT THIS RECEIPT TO ${business.textNumberDisplay} AND ZELLE THE FINAL TOTAL. YOUR MEALS WILL BE STARTED AFTER PAYMENT IS RECEIVED.`
  );
  lines.push("");
  lines.push(
    "Please text when you need the meals by and what time you are available for pickup."
  );
  lines.push("");
  lines.push(`Generated: ${generatedAt}`);

  return lines.join("\n");
}

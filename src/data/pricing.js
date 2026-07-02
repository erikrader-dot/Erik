// Base plan pricing, keyed by [planWeeks][mealsPerWeek].
// Edit these numbers to change pricing across the whole site.
export const pricing = {
  1: {
    1: { totalMeals: 1, pricePerMeal: 14.0, total: 14.0 },
    2: { totalMeals: 2, pricePerMeal: 13.75, total: 27.5 },
    3: { totalMeals: 3, pricePerMeal: 13.5, total: 40.5 },
    4: { totalMeals: 4, pricePerMeal: 13.25, total: 53.0 },
    5: { totalMeals: 5, pricePerMeal: 13.0, total: 65.0 },
  },
  2: {
    1: { totalMeals: 2, pricePerMeal: 13.5, total: 27.0 },
    2: { totalMeals: 4, pricePerMeal: 13.25, total: 53.0 },
    3: { totalMeals: 6, pricePerMeal: 13.0, total: 78.0 },
    4: { totalMeals: 8, pricePerMeal: 12.75, total: 102.0 },
    5: { totalMeals: 10, pricePerMeal: 12.5, total: 125.0 },
  },
  3: {
    1: { totalMeals: 3, pricePerMeal: 13.25, total: 39.75 },
    2: { totalMeals: 6, pricePerMeal: 13.0, total: 78.0 },
    3: { totalMeals: 9, pricePerMeal: 12.75, total: 114.75 },
    4: { totalMeals: 12, pricePerMeal: 12.5, total: 150.0 },
    5: { totalMeals: 15, pricePerMeal: 12.25, total: 183.75 },
  },
};

export const planLengthOptions = [
  { weeks: 1, label: "1 Week" },
  { weeks: 2, label: "2 Weeks" },
  { weeks: 3, label: "3 Weeks" },
];

export const mealsPerWeekOptions = [1, 2, 3, 4, 5];

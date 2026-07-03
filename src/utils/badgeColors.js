// Each meal badge gets its own color so the meal options grid reads as
// lively rather than a wall of identical green pills.
const BADGE_COLORS = {
  "Student Favorite": "bg-violet-100 text-violet-700",
  "High Protein": "bg-rose-100 text-rose-700",
  "Best Seller": "bg-amber-100 text-amber-800",
  "Comfort Meal": "bg-sky-100 text-sky-700",
  Filling: "bg-teal-100 text-teal-700",
};

export function badgeColorClasses(badge) {
  return BADGE_COLORS[badge] || "bg-gray-100 text-gray-700";
}

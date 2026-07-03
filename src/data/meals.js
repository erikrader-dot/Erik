// All available meals. Add/edit meals here — cards and selectors update automatically.
// `image` files live in /public/images — drop a real photo in with the matching
// filename and it replaces the placeholder automatically, no code changes needed.
//
// `nutrition` values are approximate ranges, not lab-tested — see the
// disclaimer shown next to every nutrition label on the site.
export const meals = [
  {
    id: "creamy-garlic-chicken-pasta",
    name: "Creamy Garlic Chicken Pasta",
    weight: "Approximately 14 oz",
    image: "/images/creamy-garlic-chicken-pasta.jpg",
    description:
      "Creamy garlic sauce, chicken breast, pasta, Parmesan, and parsley.",
    badge: "Student Favorite",
    nutrition: {
      calories: "650–750 cal",
      protein: "60–70g",
      carbs: "55–65g",
      fat: "18–25g",
    },
  },
  {
    id: "teriyaki-chicken-bowl",
    name: "Teriyaki Chicken Bowl",
    weight: "Approximately 17 oz",
    image: "/images/teriyaki-chicken-bowl.jpg",
    description:
      "Teriyaki chicken, white rice, broccoli, teriyaki sauce, and sesame seeds.",
    badge: "High Protein",
    nutrition: {
      calories: "575–650 cal",
      protein: "55–65g",
      carbs: "65–75g",
      fat: "7–12g",
    },
  },
  {
    id: "chipotle-chicken-burrito-bowl",
    name: "Chipotle Chicken Burrito Bowl",
    weight: "Approximately 18 oz, or 19–20 oz with avocado",
    image: "/images/chipotle-chicken-burrito-bowl.jpg",
    description:
      "Chicken breast, cilantro-lime rice, black beans, corn, cheddar cheese, pico de gallo, sour cream, and optional avocado.",
    badge: "Best Seller",
    nutrition: {
      calories: "700–800 cal",
      protein: "65–75g",
      carbs: "60–75g",
      fat: "18–25g",
    },
    nutritionWithAvocado: {
      calories: "780–880 cal",
      protein: "65–75g",
      carbs: "65–80g",
      fat: "25–35g",
    },
  },
  {
    id: "honey-garlic-chicken-potatoes",
    name: "Honey Garlic Chicken & Potatoes",
    weight: "Approximately 17 oz",
    image: "/images/honey-garlic-chicken-potatoes.jpg",
    description:
      "Honey garlic chicken, roasted potatoes, broccoli or green beans, and honey garlic sauce.",
    badge: "Comfort Meal",
    nutrition: {
      calories: "550–650 cal",
      protein: "40–50g",
      carbs: "50–65g",
      fat: "15–25g",
    },
  },
  {
    id: "beef-pasta-marinara",
    name: "Beef Pasta Marinara",
    weight: "Approximately 16 oz",
    image: "/images/beef-pasta-marinara.jpg",
    description:
      "Lean ground beef, pasta, marinara sauce, Parmesan, and parsley.",
    badge: "Filling",
    nutrition: {
      calories: "650–750 cal",
      protein: "50–60g",
      carbs: "60–70g",
      fat: "20–30g",
    },
  },
];

export const nutritionDisclaimer =
  "Nutrition is an approximation and may vary depending on exact portions, brands, sauces, and add-ons.";

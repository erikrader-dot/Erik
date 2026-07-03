export default function RatingStars({ value, onChange, size = "text-2xl" }) {
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating out of 5 stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          className={`${size} leading-none transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green ${
            n <= value ? "text-amber-400" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

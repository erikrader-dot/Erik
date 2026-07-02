import { useState } from "react";

// Shows the real photo at `src` once it's added to /public/images.
// Until then, falls back to a clean branded placeholder with the meal emoji.
export default function MealImage({ src, alt, emoji, className = "" }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-5xl ${className}`}
        aria-label={alt}
        role="img"
      >
        {emoji}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}

import { useState } from "react";

// Resolves a root-relative path like "/images/foo.png" against Vite's base
// (e.g. "/Erik/") so images work whether the site is deployed at a domain
// root or under a subpath like GitHub Pages project sites.
function resolveAssetUrl(path) {
  if (!path) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

// Shows the real photo at `src` once it's added to /public/images.
// Until then, falls back to a plain plate icon — no emoji — so the card
// still reads as "photo coming soon" rather than a broken image.
export default function MealImage({ src, alt, className = "" }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}
        aria-label={alt}
        role="img"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-9 w-9 text-gray-400"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
        </svg>
        <span className="text-[11px] font-medium text-gray-400">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={resolveAssetUrl(src)}
      alt={alt}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}

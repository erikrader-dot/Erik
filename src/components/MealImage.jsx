import { useState } from "react";

// Resolves a root-relative path like "/images/foo.jpg" against Vite's base
// (e.g. "/erik/") so images work whether the site is deployed at a domain
// root or under a subpath like GitHub Pages project sites.
function resolveAssetUrl(path) {
  if (!path) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

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
      src={resolveAssetUrl(src)}
      alt={alt}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}

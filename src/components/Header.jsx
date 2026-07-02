import { business } from "../data/business";

export default function Header({ step, onLogoClick }) {
  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={onLogoClick}
          className="flex items-center gap-2 text-left"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-black">
            E
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight tracking-tight">
              {business.name}
            </span>
            <span className="hidden text-xs leading-tight text-gray-400 sm:block">
              {business.subtitle}
            </span>
          </span>
        </button>

        {step !== "home" && (
          <span className="rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
            Building your order
          </span>
        )}
      </div>
    </header>
  );
}

import { business } from "../data/business";

export default function HeroSection({ onStart }) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-green blur-3xl" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
          {business.name}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Fresh Meal Prep Made Simple
        </h1>
        <p className="mt-6 max-w-xl text-base text-gray-300 sm:text-lg">
          Choose your plan, pick your meals, customize your order, and send
          your receipt to place your meal prep order.
        </p>
        <button
          onClick={onStart}
          className="mt-9 rounded-full bg-brand-green px-8 py-4 text-base font-semibold text-black shadow-lg shadow-brand-green/20 transition hover:bg-brand-green-dark hover:text-white active:scale-95"
        >
          Build My Meal Plan
        </button>
        <p className="mt-4 text-xs text-gray-400">
          No account needed. Text &amp; Zelle to pay — quick and simple.
        </p>
      </div>
    </section>
  );
}

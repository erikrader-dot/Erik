import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500 sm:px-6">
        <p className="font-semibold text-gray-800">{business.name}</p>
        <p className="mt-1">{business.subtitle}</p>
        <p className="mt-3">
          Questions? Text{" "}
          <span className="font-medium text-gray-800">
            {business.textNumberDisplay}
          </span>
        </p>
        <p className="mt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} {business.name}. All orders are paid
          manually via Zelle — no online payment yet.
        </p>
      </div>
    </footer>
  );
}

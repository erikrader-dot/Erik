import { useMemo, useState } from "react";
import { possibleNewMeals } from "../data/newMeals";
import { loadList, appendToList } from "../utils/localStore";

const STORAGE_KEY = "erik-meal-prep-votes";

function tallyVotes(submissions) {
  const counts = {};
  submissions.forEach((entry) => {
    (entry.votedMealIds || []).forEach((id) => {
      counts[id] = (counts[id] || 0) + 1;
    });
  });
  return counts;
}

export default function NewMealsVoteTab() {
  const [votedIds, setVotedIds] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otherIdea, setOtherIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showCounts, setShowCounts] = useState(false);
  const [voteCounts, setVoteCounts] = useState({});

  const toggleVote = (mealId) =>
    setVotedIds((prev) =>
      prev.includes(mealId) ? prev.filter((id) => id !== mealId) : [...prev, mealId]
    );

  const canSubmit = name.trim().length > 0 && (votedIds.length > 0 || otherIdea.trim().length > 0);

  const handleSubmit = () => {
    if (!canSubmit) return;
    appendToList(STORAGE_KEY, {
      name: name.trim(),
      phone: phone.trim(),
      votedMealIds: votedIds,
      otherIdea: otherIdea.trim(),
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });
    setSubmitted(true);
    setVotedIds([]);
    setName("");
    setPhone("");
    setOtherIdea("");
  };

  const toggleCounts = () => {
    if (!showCounts) setVoteCounts(tallyVotes(loadList(STORAGE_KEY)));
    setShowCounts((v) => !v);
  };

  const rankedCounts = useMemo(() => {
    return Object.entries(voteCounts)
      .map(([id, count]) => ({
        id,
        count,
        name: possibleNewMeals.find((m) => m.id === id)?.name || id,
      }))
      .sort((a, b) => b.count - a.count);
  }, [voteCounts]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Vote New Meals
        </h2>
        <p className="mt-3 text-gray-600">
          These are candidates for next month's menu. Pick as many as you'd
          actually order.
        </p>
      </div>

      {submitted && (
        <div className="mt-8 rounded-xl border-2 border-brand-green bg-brand-green/10 p-4 text-center font-semibold text-gray-900">
          Thanks — your meal votes were saved!
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {possibleNewMeals.map((meal) => {
          const checked = votedIds.includes(meal.id);
          return (
            <button
              key={meal.id}
              type="button"
              onClick={() => toggleVote(meal.id)}
              aria-pressed={checked}
              className={`flex flex-col items-start rounded-xl border-2 p-4 text-left transition ${
                checked
                  ? "border-brand-green bg-gradient-to-br from-brand-green/10 to-amber-400/10 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex w-full items-start justify-between gap-2">
                <h3 className="font-semibold leading-snug text-gray-900">
                  {meal.name}
                </h3>
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    checked
                      ? "border-brand-green bg-brand-green text-black"
                      : "border-gray-300 text-transparent"
                  }`}
                >
                  ✓
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {meal.description}
              </p>
              <div className="mt-3 flex gap-1.5">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                    meal.difficulty === "Easy"
                      ? "bg-teal-100 text-teal-700"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {meal.difficulty}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                    meal.popularity === "High"
                      ? "bg-rose-100 text-rose-700"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  {meal.popularity} demand
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900">
          {votedIds.length > 0
            ? `${votedIds.length} meal${votedIds.length > 1 ? "s" : ""} selected`
            : "Cast Your Vote"}
        </h3>

        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Name <span className="text-brand-green">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Phone Number{" "}
              <span className="font-normal normal-case text-gray-400">
                (optional)
              </span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(954) 555-0123"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Have another meal idea? Write it here.
            </label>
            <textarea
              value={otherIdea}
              onChange={(e) => setOtherIdea(e.target.value)}
              placeholder="e.g. a shrimp bowl, a vegetarian option..."
              rows={2}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="mt-5 w-full rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          Submit Vote
        </button>
        {!canSubmit && (
          <p className="mt-2 text-center text-xs text-gray-400">
            Enter your name and pick at least one meal (or write in an idea).
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={toggleCounts}
          className="text-xs font-medium text-gray-400 underline underline-offset-2 hover:text-gray-600"
        >
          {showCounts ? "Hide Current Vote Counts" : "View Current Vote Counts"}
        </button>
      </div>

      {showCounts && (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          {rankedCounts.length === 0 ? (
            <p className="text-center text-sm text-gray-400">
              No votes recorded yet on this device.
            </p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {rankedCounts.map(({ id, name: mealName, count }) => (
                <li
                  key={id}
                  className="flex items-center justify-between py-2 text-sm"
                >
                  <span className="text-gray-700">{mealName}</span>
                  <span className="font-semibold text-brand-green">
                    {count} vote{count > 1 ? "s" : ""}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

import { useState } from "react";
import { meals } from "../data/meals";
import MealImage from "./MealImage";
import RatingStars from "./RatingStars";
import { loadList, appendToList } from "../utils/localStore";

const STORAGE_KEY = "erik-meal-prep-feedback";

function emptyMealFeedback() {
  return Object.fromEntries(meals.map((m) => [m.id, { rating: 0, feedback: "" }]));
}

export default function FeedbackTab() {
  const [mealFeedback, setMealFeedback] = useState(emptyMealFeedback);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [generalFeedback, setGeneralFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const setMealRating = (mealId, rating) =>
    setMealFeedback((prev) => ({ ...prev, [mealId]: { ...prev[mealId], rating } }));

  const setMealNote = (mealId, feedback) =>
    setMealFeedback((prev) => ({ ...prev, [mealId]: { ...prev[mealId], feedback } }));

  const canSubmit = name.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    appendToList(STORAGE_KEY, {
      name: name.trim(),
      phone: phone.trim(),
      mealFeedback,
      generalFeedback: generalFeedback.trim(),
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });
    setSubmitted(true);
    setMealFeedback(emptyMealFeedback());
    setName("");
    setPhone("");
    setGeneralFeedback("");
  };

  const toggleAdmin = () => {
    if (!showAdmin) setSubmissions(loadList(STORAGE_KEY));
    setShowAdmin((v) => !v);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Rate & Feedback
        </h2>
        <p className="mt-3 text-gray-600">
          Already tried a meal? Let Erik know what you thought — it helps
          shape what gets made next.
        </p>
      </div>

      {submitted && (
        <div className="mt-8 rounded-xl border-2 border-brand-green bg-brand-green/10 p-4 text-center font-semibold text-gray-900">
          Thank you for your feedback!
        </div>
      )}

      <div className="mt-8 space-y-5">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <MealImage
                src={meal.image}
                alt={meal.name}
                className="h-16 w-16 flex-shrink-0 rounded-lg"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-900">
                  {meal.name}
                </h3>
                <RatingStars
                  value={mealFeedback[meal.id].rating}
                  onChange={(r) => setMealRating(meal.id, r)}
                />
              </div>
            </div>
            <textarea
              value={mealFeedback[meal.id].feedback}
              onChange={(e) => setMealNote(meal.id, e.target.value)}
              placeholder={`Any thoughts on the ${meal.name}?`}
              rows={2}
              className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900">Your Info</h3>
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
              General Feedback
            </label>
            <textarea
              value={generalFeedback}
              onChange={(e) => setGeneralFeedback(e.target.value)}
              placeholder="Anything else you'd like to share?"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="mt-5 w-full rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          Submit Feedback
        </button>
        {!canSubmit && (
          <p className="mt-2 text-center text-xs text-gray-400">
            Enter your name to submit feedback.
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={toggleAdmin}
          className="text-xs font-medium text-gray-400 underline underline-offset-2 hover:text-gray-600"
        >
          {showAdmin ? "Hide Submitted Feedback" : "View Submitted Feedback"}
        </button>
      </div>

      {showAdmin && (
        <div className="mt-4 space-y-3">
          {submissions.length === 0 ? (
            <p className="text-center text-sm text-gray-400">
              No feedback submitted yet on this device.
            </p>
          ) : (
            submissions
              .slice()
              .reverse()
              .map((entry, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {entry.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {entry.submittedAt}
                    </span>
                  </div>
                  {entry.phone && (
                    <p className="text-xs text-gray-500">{entry.phone}</p>
                  )}
                  <div className="mt-2 space-y-1">
                    {meals.map((meal) => {
                      const mf = entry.mealFeedback?.[meal.id];
                      if (!mf || (!mf.rating && !mf.feedback)) return null;
                      return (
                        <p key={meal.id} className="text-xs text-gray-600">
                          <span className="font-medium">{meal.name}:</span>{" "}
                          {mf.rating ? `${mf.rating}★` : "no rating"}
                          {mf.feedback ? ` — ${mf.feedback}` : ""}
                        </p>
                      );
                    })}
                  </div>
                  {entry.generalFeedback && (
                    <p className="mt-2 text-xs text-gray-600">
                      <span className="font-medium">General:</span>{" "}
                      {entry.generalFeedback}
                    </p>
                  )}
                </div>
              ))
          )}
        </div>
      )}
    </section>
  );
}

export default function CustomerInfoForm({ customer, onChange }) {
  const handle = (field) => (e) => onChange({ ...customer, [field]: e.target.value });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">Your Info</h3>
      <p className="mt-1 text-sm text-gray-500">
        We'll use this to confirm your order and get in touch about pickup.
      </p>

      <div className="mt-5 space-y-4">
        <Field
          label="Full Name"
          required
          value={customer.name}
          onChange={handle("name")}
          placeholder="Jane Smith"
        />
        <Field
          label="Phone Number"
          required
          type="tel"
          value={customer.phone}
          onChange={handle("phone")}
          placeholder="(954) 555-0123"
        />
        <Field
          label="Preferred Pickup Day/Time"
          required
          value={customer.pickupTime}
          onChange={handle("pickupTime")}
          placeholder="e.g. Sunday around 5pm"
        />
        <Field
          label="Allergies or Food Notes"
          value={customer.allergies}
          onChange={handle("allergies")}
          placeholder="e.g. no peanuts, allergic to shellfish"
          textarea
        />
        <Field
          label="Optional Notes"
          value={customer.notes}
          onChange={handle("notes")}
          placeholder="Anything else we should know?"
          textarea
        />
      </div>

      <p className="mt-5 rounded-lg bg-gray-50 p-3 text-xs leading-relaxed text-gray-500">
        Meals are made to order. Please mention any allergies or dietary
        restrictions before paying.
      </p>
    </div>
  );
}

function Field({ label, required, value, onChange, placeholder, type = "text", textarea }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label} {required && <span className="text-brand-green">*</span>}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={2}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
        />
      )}
    </div>
  );
}

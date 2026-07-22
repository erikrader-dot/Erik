export function formatUsd(value, { compact = true } = {}) {
  if (value == null || Number.isNaN(value)) return "—";
  if (compact) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(value);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function formatNumber(value, opts = {}) {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-US", opts).format(value);
}

export function formatMwh(value) {
  if (value == null || Number.isNaN(value)) return "Not disclosed";
  return `${formatNumber(value, { maximumFractionDigits: 1 })} MWh`;
}

export function formatPct(value, { digits = 0 } = {}) {
  if (value == null || Number.isNaN(value)) return "—";
  return `${(value * 100).toFixed(digits)}%`;
}

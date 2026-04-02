export const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0
});

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-ZA", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

export function joinMeta(...parts) {
  return parts.filter(Boolean).join(" | ");
}

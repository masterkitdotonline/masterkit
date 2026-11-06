// ─────────────────────────────────────────────────────────────
//  EDIT THESE ONCE – used on the Contact, About, Privacy,
//  Terms and Disclaimer pages and in the footer.
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "MasterKit",
  url: "https://masterkit.online",
  email: "pcoding91@gmail.com", // <-- replace with your real email
  whatsapp: "923189708557", // <-- replace: country code + number, digits only (e.g. 923001234567)
  whatsappLabel: "+92 318 9708557", // <-- how the number is displayed
  responseTime: "within 24–48 hours",
  updated: "November 2026",
};

export const mailto = (subject = "", body = "") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const whatsappLink = (text = "") =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

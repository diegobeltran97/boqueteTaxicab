// Single place to update contact details across the whole site.
// Replace these placeholders with the real number, email, and domain.
// Country code + number, digits only (wa.me format).
export const WHATSAPP_NUMBER = "50766809625";

export const CONTACT = {
  phoneHref: "tel:+50766809625",
  phoneDisplay: "+507 6680-9625",
  email: "hello@boquetetaxicab.com",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const SITE_URL = "https://boquetetaxicab.com";

// Google Analytics 4 measurement ID.
export const GA_MEASUREMENT_ID = "G-VCVSSSX2LJ";

export const NAV_LINKS = [
  { href: "/airport-transfers", en: "Airport Transfers", es: "Aeropuerto" },
  { href: "/boquete-taxi", en: "Local Rides", es: "Taxi Local" },
  { href: "/tours", en: "Tours", es: "Tours" },
  // { href: "/rates", en: "Rates", es: "Tarifas" },
  //  { href: "/book-now", en: "Book Now", es: "Reservar" },
  { href: "/about", en: "Why Us", es: "Nosotros" },
] as const;

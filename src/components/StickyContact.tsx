import Link from "next/link";
import { T } from "@/components/T";
import { CONTACT } from "@/lib/site";

export function StickyContact() {
  return (
    <div className="sticky-contact" aria-label="Quick contact">
      {/* Booking page on hold until the client asks for it. Restoring this also
          restores the 3-column layout the bar is styled for.
      <Link href="/book-now">
        <T en="Book" es="Reservar" />
      </Link> */}
      <a href={CONTACT.whatsapp}>WhatsApp</a>
      <a href={CONTACT.phoneHref}>
        <T en="Call" es="Llamar" />
      </a>
    </div>
  );
}

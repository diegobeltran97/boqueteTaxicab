import Link from "next/link";
import { T } from "@/components/T";
import { CONTACT } from "@/lib/site";

export function StickyContact() {
  return (
    <div className="sticky-contact" aria-label="Quick contact">
      <Link href="/book-now">
        <T en="Book" es="Reservar" />
      </Link>
      <a href={CONTACT.whatsapp}>WhatsApp</a>
      <a href={CONTACT.phoneHref}>
        <T en="Call" es="Llamar" />
      </a>
    </div>
  );
}

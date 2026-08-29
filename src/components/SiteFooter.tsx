import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";

/**
 * Shared footer shell. Each page passes its own blurb and columns, matching the
 * per-page footers in the HTML template.
 */
export function SiteFooter({
  blurb,
  children,
}: {
  blurb: ReactNode;
  children: ReactNode;
}) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/assets/boquete-logo.png"
            alt="Boquete Taxi Cab"
          />
          <p>{blurb}</p>
        </div>
        {children}
      </div>
    </footer>
  );
}

export function FooterContact({ title = "Contact" }: { title?: ReactNode }) {
  return (
    <div>
      <h3>{title}</h3>
      <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      <a href={CONTACT.whatsapp}>WhatsApp</a>
    </div>
  );
}

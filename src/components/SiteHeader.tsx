"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import { MenuButton } from "@/components/MenuButton";
import { T } from "@/components/T";
import { CONTACT, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Boquete Taxi Cab home">
          <img src="/assets/boquete-logo.png" alt="" />
          <span>
            Boquete
            <br />
            Taxi Cab
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <T en={link.en} es={link.es} />
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-toggle" aria-label="Language">
            <button
              type="button"
              data-set-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              data-set-lang="es"
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <a className="outline-button header-call" href={CONTACT.phoneHref}>
            Call
          </a>
          <MenuButton />
        </div>
      </div>
    </header>
  );
}

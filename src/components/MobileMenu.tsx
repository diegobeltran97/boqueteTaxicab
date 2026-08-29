"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useLang } from "@/components/LangProvider";
import { useMenu } from "@/components/MenuProvider";
import { T } from "@/components/T";
import { NAV_LINKS } from "@/lib/site";

const FOCUSABLE = 'a[href], button:not([disabled])';

export function MobileMenu() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const { open, closeMenu, toggleButtonRef } = useMenu();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Stops the page behind the drawer from scrolling (mobile only, see CSS).
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Move focus into the drawer on open, and back to the hamburger on close.
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
      wasOpen.current = true;
    } else if (wasOpen.current) {
      wasOpen.current = false;
      toggleButtonRef.current?.focus();
    }
  }, [open, toggleButtonRef]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  // Keep Tab inside the drawer while it is open.
  function trapTab(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button
        type="button"
        className={`menu-backdrop${open ? " is-open" : ""}`}
        aria-label="Close menu"
        inert={!open}
        onClick={closeMenu}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        onKeyDown={trapTab}
      >
        <div className="mobile-menu-head">
          <span className="mobile-menu-title">
            Boquete
            <br />
            Taxi Cab
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            className="menu-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={closeMenu}
          >
            <T en="Home" es="Inicio" />
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              <T en={link.en} es={link.es} />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-lang">
          <span className="mini-label">
            <T en="Language" es="Idioma" />
          </span>
          <div className="mobile-lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              data-set-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              English
            </button>
            <button
              type="button"
              data-set-lang="es"
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              Espanol
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

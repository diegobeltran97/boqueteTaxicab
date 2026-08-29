"use client";

import { useMenu } from "@/components/MenuProvider";

/** Hamburger. Only visible on mobile, where the inline nav is hidden. */
export function MenuButton() {
  const { open, openMenu, closeMenu, toggleButtonRef } = useMenu();

  return (
    <button
      ref={toggleButtonRef}
      type="button"
      className="menu-button"
      aria-label="Menu"
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={open ? closeMenu : openMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

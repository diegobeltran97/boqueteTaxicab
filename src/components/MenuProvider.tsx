"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

/**
 * The hamburger button lives in the header, but the drawer has to render
 * outside it: `.site-header` uses `backdrop-filter`, which would make a fixed
 * child position itself against the header instead of the viewport. The shared
 * state lets the two live in different places in the tree.
 */
type MenuContextValue = {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleButtonRef: RefObject<HTMLButtonElement | null>;
};

const MenuContext = createContext<MenuContextValue>({
  open: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleButtonRef: { current: null },
});

export const useMenu = () => useContext(MenuContext);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openMenu, closeMenu, toggleButtonRef }),
    [open, openMenu, closeMenu],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { LANG_STORAGE_KEY, type Lang } from "@/lib/lang";

/**
 * The language lives in localStorage and on `body[data-lang]` (the attribute the
 * stylesheet keys off). React subscribes to it as an external store, so the
 * bootstrap script in the layout can set it before paint without a flash.
 */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // Private mode or blocked storage: fall through to the default.
  }
  return "en";
}

const getServerSnapshot = (): Lang => "en";

function writeLang(next: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    // The toggle still works for this visit even if storage is blocked.
  }
  document.body.dataset.lang = next;
  document.documentElement.lang = next;
  listeners.forEach((listener) => listener());
}

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value = useMemo(() => ({ lang, setLang: writeLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

import type { ReactNode } from "react";

/**
 * Bilingual text. Both languages stay in the DOM (good for SEO) and the active
 * one is chosen by CSS through `body[data-lang]`, exactly like the template.
 */
export function T({ en, es }: { en: ReactNode; es: ReactNode }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="es">{es}</span>
    </>
  );
}

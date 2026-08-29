export type Lang = "en" | "es";

export const LANG_STORAGE_KEY = "btc-lang";

/**
 * Inlined at the top of <body> so a stored Spanish preference is applied before
 * first paint instead of flashing English.
 */
export const langBootstrapScript = `(function(){try{var l=localStorage.getItem("${LANG_STORAGE_KEY}");if(l==="es"||l==="en"){document.body.dataset.lang=l;document.documentElement.lang=l;}}catch(e){}})();`;

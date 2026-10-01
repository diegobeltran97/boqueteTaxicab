/**
 * Google reviews for the home page, served by the free Featurable API.
 *
 * Featurable syncs the Google Business Profile roughly once a day and exposes
 * it as a public JSON widget, so the site needs no Google Cloud key, no billing,
 * and nothing secret in the browser:
 *
 *   https://api.featurable.com/v1/widgets/<widget id>
 *
 * The widget ID lives in `site.ts` next to the other public identifiers. Which
 * reviews appear, and in what order, is controlled in the Featurable dashboard
 * (https://featurable.com/app/widgets) — this file just renders what it sends.
 * Set FEATURABLE_WIDGET_ID in the environment to point at a different widget
 * without a code change; if the API is unreachable or sends nothing, the section
 * falls back to the placeholder cards in `src/components/GoogleReviews.tsx`.
 */

import { FEATURABLE_WIDGET_ID, GOOGLE_PLACE_ID } from "@/lib/site";

export type GoogleReview = {
  id: string;
  author: string;
  photo: string | null;
  /** 1-5, or null when Featurable sends no usable rating. */
  rating: number | null;
  text: string;
  /** Set only when Google translated the review: the text the author wrote. */
  originalText: string | null;
  publishedAt: string | null;
};

export type GoogleReviewsData = {
  reviews: GoogleReview[];
  averageRating: number | null;
  totalReviewCount: number;
  /** Google's public listing of every review. */
  reviewsUrl: string;
  /** Opens Google's "write a review" dialog for this business. */
  writeReviewUrl: string;
};

/** Google's review listing for the business, used when the API sends nothing. */
export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`;

/** The fields we use from the Featurable v1 widget response. */
type FeaturableResponse = {
  success: boolean;
  profileUrl?: string | null;
  totalReviewCount?: number;
  averageRating?: number;
  reviews?: {
    reviewId?: string | null;
    reviewer?: {
      displayName?: string;
      profilePhotoUrl?: string;
      isAnonymous?: boolean;
    };
    starRating?: number;
    comment?: string;
    createTime?: string | null;
    updateTime?: string | null;
  }[];
};

/** How many reviews the home page grid shows. */
export const REVIEW_LIMIT = 3;

/** Featurable refreshes once a day, so polling faster buys nothing. */
const REVALIDATE_SECONDS = 86_400;

/**
 * Google delivers a translated review as a single string:
 * "(Translated by Google) <translation> (Original) <what the author wrote>".
 */
function splitTranslation(comment: string): {
  text: string;
  originalText: string | null;
} {
  const marker = comment.indexOf("(Original)");
  if (marker === -1) return { text: comment.trim(), originalText: null };

  const text = comment
    .slice(0, marker)
    .replace("(Translated by Google)", "")
    .trim();
  const originalText = comment.slice(marker + "(Original)".length).trim();

  return { text: text || originalText, originalText: text ? originalText : null };
}

/**
 * Featurable sends `profileUrl` as Google's "write a review" link. The same URL
 * with `reviews` instead lists every review, which is what the CTA wants.
 */
function toReviewsUrl(profileUrl: string | null | undefined): string {
  if (!profileUrl) return GOOGLE_REVIEWS_URL;
  return profileUrl.includes("/writereview")
    ? profileUrl.replace("/writereview", "/reviews")
    : profileUrl;
}

function toRating(starRating: number | undefined): number | null {
  if (typeof starRating !== "number" || !Number.isFinite(starRating)) return null;
  const rounded = Math.round(starRating);
  return rounded >= 1 && rounded <= 5 ? rounded : null;
}

/**
 * Reviews for the home page, or null when the widget is unset, unreachable, or
 * empty — callers render their own fallback. A review outage must never break
 * the page, so every failure path returns null instead of throwing.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const widgetId = process.env.FEATURABLE_WIDGET_ID || FEATURABLE_WIDGET_ID;
  if (!widgetId) return null;

  try {
    const response = await fetch(
      `https://api.featurable.com/v1/widgets/${widgetId}`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!response.ok) return null;

    const data = (await response.json()) as FeaturableResponse;
    if (!data.success || !data.reviews?.length) return null;

    const reviews = data.reviews
      .filter((review) => review.comment?.trim())
      .map((review, index) => {
        const { text, originalText } = splitTranslation(review.comment ?? "");
        return {
          id: review.reviewId ?? `google-review-${index}`,
          author: review.reviewer?.displayName?.trim() || "Google user",
          photo: review.reviewer?.isAnonymous
            ? null
            : review.reviewer?.profilePhotoUrl || null,
          rating: toRating(review.starRating),
          text,
          originalText,
          publishedAt: review.createTime ?? review.updateTime ?? null,
        };
      });

    if (!reviews.length) return null;

    return {
      reviews,
      averageRating:
        typeof data.averageRating === "number" ? data.averageRating : null,
      totalReviewCount: data.totalReviewCount ?? reviews.length,
      reviewsUrl: toReviewsUrl(data.profileUrl),
      writeReviewUrl: data.profileUrl ?? GOOGLE_REVIEWS_URL,
    };
  } catch {
    return null;
  }
}

/**
 * "2 months ago" / "hace 2 meses". Rendered on the server, so it is accurate to
 * the last revalidation — close enough for a review date. Accents are stripped
 * because the rest of the Spanish copy on the site is written without them.
 */
export function relativeDate(iso: string, locale: "en" | "es"): string | null {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return null;

  const days = Math.round((Date.now() - then) / 86_400_000);
  const format = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  const relative =
    days < 1
      ? format.format(0, "day")
      : days < 30
        ? format.format(-days, "day")
        : days < 365
          ? format.format(-Math.round(days / 30), "month")
          : format.format(-Math.round(days / 365), "year");

  return relative.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
